import React from "react";
import bcraLogo from "../../assets/BCRA_logo.svg";

export function Header() {
  return (
    <header className="bg-white text-[#1e1e1e] sticky top-0 z-30 shadow-lg">
      <div className="flex justify-between items-center p-3 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-tr from-violet-600 to-green-600 rounded-full flex justify-center items-center overflow-hidden">
            <img
              src={bcraLogo}
              alt="BCRA Logo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Texto responsive y adaptable a pantallas muy pequeñas */}
          <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#1e1e1e] truncate">
            Banco Central de la República Argentina - Estadísticas
          </span>
        </div>
        {/* Indicador de estado del servidor visible solo en pantallas grandes */}
        <div className="hidden lg:flex items-center space-x-2 mr-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-blink"></div>
          <span className="text-sm">Estado del servidor</span>
        </div>
      </div>
    </header>
  );
}
