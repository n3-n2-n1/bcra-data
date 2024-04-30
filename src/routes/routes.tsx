
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import Home from "../pages/Home";

const HomeRoute = lazy (() => import("../pages/Home"));

const AppRoutes: React.FC = () => {
    return (
      <Routes>
        <Route path={paths.home} element={<HomeRoute />} />
      
      </Routes>
    );
  };
  
  export default AppRoutes;