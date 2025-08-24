import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import { FaSearch, FaUsers } from "react-icons/fa";

export default function NavBar() {
  return (
    <Navbar className="bg-body-tertiary justify-content-between py-3">
      <Form>
        <InputGroup>
          <FaUsers size={30} className="ms-3 me-2 " />
          <span className="text-warning">Users Mangment System</span>
        </InputGroup>
      </Form>
      <Form>
        <Row>
          <div className="d-flex align-items-center">
            <Form.Control
              type="text"
              placeholder="Search by first name"
              className=" mr-sm-2"
            />

            <FaSearch size={20} className="text-warning ms-2" />
          </div>
        </Row>
      </Form>
    </Navbar>
  );
}
