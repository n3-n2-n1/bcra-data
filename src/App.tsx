import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Items } from "./components/Items/Items";
import { useState } from "react";
import Loader from "./components/Loader/Loader";
import { useEffect } from "react";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Aquí iría tu llamada a la API o lógica para obtener los datos de los items
    fetchItems().then(data => {
      setItems(data); // Actualiza el estado con los items obtenidos
      setIsLoading(false); // Establece isLoading en false para ocultar el loader
    });
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez después del montaje inicial

  // Simula una llamada a la API
  const fetchItems = async () => {
    // Simula un retraso para demostrar el loader
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]; // Datos simulados
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white">
          <Header />
          <div className="flex">
            <div className="" />
            <div className="grow">
              <Content />
              <Items />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
