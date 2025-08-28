import { useEffect, useState } from "react";
import UserForm from "../UserForm/UserForm";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function Profile() {
  const [loading, setloading] = useState(true);
  const [userData, setuserData] = useState<any>(null);
  const getProfile = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.get("https://dummyjson.com/user/me", {
        headers: {
          Authorization: `Bearer ${token}`, //  send token with request
        },
      });

      setuserData(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false); // stop loading in both success/error cases
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <UserForm Pageheader="Profile" defaultValues={userData} readOnly={true} />
  );
}
