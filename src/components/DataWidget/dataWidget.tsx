import { useEffect, useState } from "react";

export const EconomicDataWidget = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;
  const local = import.meta.env.VITE_API_LOCAL;

  useEffect(() => {
    fetch('https://bcra-back.vercel.app/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data.results); // Guarda los datos recibidos en el estado
        setFilteredData(data.results); // Inicialmente no hay filtro aplicado
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred");
      });
  }, []);

  const toggleItem = (index) => {
    if (selectedItem === index) {
      setSelectedItem(null); // Si es el mismo ítem, oculta la información
    } else {
      setSelectedItem(index); // Muestra la información del ítem seleccionado
    }
  };

  useEffect(() => {
    // Filtra los datos cada vez que el estado 'filter' cambie
    const newFilteredData = data.filter(
      (item) =>
        filter === "all" || item.descripcion.toLowerCase().includes(filter)
    );
    setFilteredData(newFilteredData); // Actualiza los datos filtrados en el estado
  }, [filter, data]);

  const handleFilterChange = (event) => {
    // Extrae la primera palabra del valor seleccionado, asumiendo que las palabras están separadas por espacios
    const firstWord = event.target.value.split(" ")[0].toLowerCase();
    setFilter(firstWord);
  };

  const getCategoryColor = (descripcion) => {
    if (descripcion.toLowerCase().includes("tasa")) return "border-yellow-500";
    if (descripcion.toLowerCase().includes("índice")) return "border-red-500";
    if (descripcion.toLowerCase().includes("depósito"))
      return "border-green-500";
    if (descripcion.toLowerCase().includes("efectivo"))
      return "border-purple-500";
    if (descripcion.toLowerCase().includes("inflación"))
      return "border-orange-500";
    return "border-blue-600"; // Default color if no match found
  };

  const importantData = data.filter(
    (item) =>
      item.descripcion.toLowerCase().includes("inflación mensual") ||
      item.descripcion.toLowerCase().includes("uva") ||
      item.descripcion.toLowerCase().includes("inflación esperada")
  );

  const infoWidget = (descripcion) => {
    if (descripcion.toLowerCase().includes("tasa"))
      return "Las tasas de interés son los porcentajes que determinan el costo o el rendimiento del dinero en diferentes contextos financieros.";
    if (descripcion.toLowerCase().includes("efectivo"))
      return "El efectivo se refiere a la cantidad de dinero en forma de billetes y monedas que está disponible inmediatamente.";
    if (descripcion.toLowerCase().includes("deposito"))
      return "Un depósito es una suma de dinero guardada en una cuenta bancaria.";
    if (descripcion.toLowerCase().includes("indice"))
      return "Un índice es un indicador estadístico que refleja cambios y tendencias.";
    return "Información no disponible.";
  };

  if (error) {
    return (
      <div className="text-red-500 text-center font-bold p-5">
        Error: {error}
      </div>
    );
  }

  const cardColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {importantData.map((item, index) => (
          <div
            key={index}
            className={`${
              cardColors[index % cardColors[0].length]
            } shadow-lg rounded-lg p-4 mb-2 text-white`}
          >
            <h3 className="text-xl font-semibold">{item.descripcion}</h3>
            <p className="font-bold text-3xl pt-4">{item.valor}</p>
            <p>Valor al {item.fecha}</p>
          </div>
        ))}
      </div>
      <div className="p-4 mb-4 rounded-full flex gap-3 sm:gap-12">
        <div className="w-full">
          <select
            onChange={handleFilterChange}
            className="block py-2.5 px-3 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="all">Todos</option>
            <option value="tasa">Tasas</option>
            <option value="índice">Índices</option>
            <option value="efectivo">Efectivo</option>
            <option value="depósito">Depósito</option>
            <option value="inflación">Inflación</option>
          </select>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none rounded-full px-2 py-1 shadow-lg">
          <span className="text-white font-medium">Actualizar</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-4 border-l-4 ${getCategoryColor(
              item.descripcion
            )} hover:shadow-lg transition-shadow duration-300 relative`}
            onClick={() => toggleItem(index)}
            onMouseEnter={() => toggleItem(index)}
            onMouseLeave={() => setSelectedItem(null)}
          >
            <h3 className="text-xl font-semibold mb-2 text-black">
              {item.descripcion}
            </h3>
            <p className="text-black font-bold text-2xl">{item.valor}</p>
            <p className="text-gray-500 pt-4">Valor al {item.fecha}</p>
            {selectedItem === index && (
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-90 flex items-center justify-center p-4">
                <p className="text-gray-700 text-lg font-semibold">
                  {infoWidget(item.descripcion)}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
