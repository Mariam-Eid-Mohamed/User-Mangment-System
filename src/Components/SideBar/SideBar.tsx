import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebarContainer vh-100">
      <Sidebar className="h-100">
        <div className="text-center my-3">
          <img src="" className="rounded-circle" alt="profile img" />
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
