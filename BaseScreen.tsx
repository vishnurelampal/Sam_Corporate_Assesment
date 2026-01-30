import { Outlet } from "react-router-dom";
import Header from "./src/components/common/Header";
const BaseScreen = () => {
  return (
    <div className="bg-black min-w-screen min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default BaseScreen;
