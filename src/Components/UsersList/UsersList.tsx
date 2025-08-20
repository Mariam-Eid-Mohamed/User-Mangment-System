import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  birthDate: string;
}
export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  const getusers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response?.data?.users || []);
      console.log(response?.data?.users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getusers();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between mx-4">
        <h3>Users List</h3>
        <button className="btn btn-warning text-white">Add New User</button>
      </div>
      <hr />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birthdate</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user?.id}>
              <td>{user?.id}</td>
              <td>
                <img src={user?.image} className="w-25" alt="" />
              </td>
              <td>{user?.firstName}</td>
              <td>{user?.lastName}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{user?.birthDate}</td>
              <td>
                <CiEdit size={30} className="text-warning me-3" />
                <MdDeleteOutline size={25} className="text-danger" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
