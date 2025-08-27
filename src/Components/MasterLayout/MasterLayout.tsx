import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

export default function MasterLayout() {
  return (
    <>
      <div className="d-flex vh-100 ">
        <div>
          <SideBar />
        </div>

        <div className="flex-grow-1 d-flex flex-column">
          <NavBar />
          <div className="flex-grow-1 overflow-auto ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
