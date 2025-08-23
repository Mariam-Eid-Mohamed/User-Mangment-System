import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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

  const deleteUser = async () => {
    try {
      await axios.delete(`https://dummyjson.com/users/${userId}`);
      //to close the modal after i press delete
      handleClose();
      toast.success("deleted successfully");
      //rerender data after deletion
      getusers();
    } catch (error) {
      console.log(error);
      toast.error("Failed to  delete !");
    }
  };
  useEffect(() => {
    getusers();
  }, []);
  //modal
  const [show, setShow] = useState(false);
  const [userData, setuserData] = useState<User | null>();
  const [userId, setuserId] = useState<number | null>(null);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = (user: User) => {
    setuserId(user?.id);
    setuserData(user);
    setShow(true);
  };
  const moveToAddUser = () => {
    navigate("/dashboard/add-user");
  };

  return (
    <>
      <div className="d-flex justify-content-between mx-4">
        <h3>Users List</h3>
        <button onClick={moveToAddUser} className="btn btn-warning text-white">
          Add New User
        </button>
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
                <CiEdit
                  size={30}
                  className="text-warning me-3"
                  onClick={() =>
                    navigate("/dashboard/update-user", { state: { user } })
                  }
                />
                <MdDeleteOutline
                  onClick={() => handleShow(user)}
                  size={25}
                  className="text-danger"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {userData?.firstName}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
