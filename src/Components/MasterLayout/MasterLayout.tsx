import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

export default function MasterLayout() {
  return (
    <>
      <div className="d-flex min-vh-100">
        <div>
          <SideBar />
        </div>

        <div className="w-100 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
