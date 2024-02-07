import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <>
      <div className="py-3">
        <NavBar />
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Index;
