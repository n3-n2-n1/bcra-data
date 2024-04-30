import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Items } from "./components/Items/Items";
import { useState } from "react";
import Loader from "./components/Loader/Loader";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
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
