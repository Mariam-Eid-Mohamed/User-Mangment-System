import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaRegUser,
} from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
    //this means that
    // if (collapsed) {
    //   setCollapsed(false);
    // } else {
    //   setCollapsed(true);
    // }
  };
  return (
    <div className="sidebarContainer vh-100">
      <Sidebar collapsed={collapsed} className="h-100">
        {collapsed ? (
          <FaArrowCircleLeft
            size={25}
            className="m-3"
            onClick={toggleCollapse}
          />
        ) : (
          <FaArrowCircleRight
            size={25}
            className="m-3"
            onClick={toggleCollapse}
          />
        )}

        <div className="text-center my-3">
          <img src="" className="rounded-circle w-75" alt="profile img" />
          <h5>Mariam</h5>
          <h6 className="text-warning">Admin</h6>
        </div>
        <Menu>
          <MenuItem
            icon={<IoHomeOutline />}
            component={<Link to="/dashboard" />}
          >
            Home
          </MenuItem>
          <MenuItem
            icon={<LuUsers />}
            component={<Link to="/dashboard/users-list" />}
          >
            Users
          </MenuItem>
          <MenuItem
            icon={<FaRegUser />}
            component={<Link to="/dashboard/add-user" />}
          >
            Add User
          </MenuItem>

          <MenuItem
            icon={<CgProfile />}
            component={<Link to="/dashboard/profile" />}
          >
            Profile
          </MenuItem>
          <MenuItem icon={<CiLogout />}>Logout</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
