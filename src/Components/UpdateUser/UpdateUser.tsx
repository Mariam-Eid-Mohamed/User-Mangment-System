import UserForm from "../UserForm/UserForm";
import type { User } from "../UserForm/UserForm";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateUser() {
  const location = useLocation();
  const user = location.state?.user as User;
  const updateUser = async (data: User) => {
    try {
      await axios.put(` https://dummyjson.com/users/${user.id}`, data);
      toast.success("User Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserForm
      defaultValues={user}
      onSubmit={updateUser}
      submitLabel="Update"
      Pageheader="Update User"
    />
  );
}
