import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Items } from "./components/Items/Items";

const App = () => {
  return (
    <>
      <div className="bg-white ">
        <Header />
        <div className="flex">
          <div className="" />
          <div className="grow">
            <Content />
            <Items />
          </div>
        </div>

      </div>
    </>
  );
};

export default App;
