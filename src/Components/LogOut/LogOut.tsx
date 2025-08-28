import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"; // adjust path

export default function LogOut() {
  const { logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, []);

  return null; // nothing to render
}
