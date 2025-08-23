import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserForm from "../UserForm/UserForm";

export default function AddUser() {
  const navigate = useNavigate();

  interface UserAdd {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: number;
    birthDate: string;
  }
  const addUser = async (data: UserAdd) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        data
      );
      console.log(response);
      toast.success("user added successfully");
      navigate("/dashboard/users-list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <UserForm onSubmit={addUser} submitLabel="Save" Pageheader="Add User" />
    </>
  );
}
