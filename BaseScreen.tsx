import { Outlet } from "react-router-dom";
import Header from "./src/components/common/Header";
const BaseScreen = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default BaseScreen;
