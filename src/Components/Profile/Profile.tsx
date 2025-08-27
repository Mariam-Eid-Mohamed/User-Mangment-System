import { useEffect, useState } from "react";
import UserForm from "../UserForm/UserForm";
import axios from "axios";

export default function Profile() {
  const [userData, setuserData] = useState<any>(null);
  const getProfile = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.get("https://dummyjson.com/user/me", {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ send token with request
        },
      });

      setuserData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <UserForm Pageheader="Profile" defaultValues={userData} readOnly={true} />
  );
}
