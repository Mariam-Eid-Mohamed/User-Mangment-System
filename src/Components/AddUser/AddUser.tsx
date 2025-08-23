import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddUser() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAdd>();

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
      <div>
        <h4 className="p-2">Add User</h4>
        <hr />
      </div>

      <form className="m-5 shadow-lg p-3 " onSubmit={handleSubmit(addUser)}>
        <div className="row text-secondary">
          <div className="col-lg-6 my-3 ">
            <label htmlFor="" className="my-3">
              First Name
            </label>
            <input
              type="text"
              placeholder="enter your first name"
              className="form-control "
              {...register("firstName", {
                required: "first name is required",
              })}
            />
            {errors.firstName && (
              <span className=" text-danger">{errors.firstName.message}</span>
            )}
            <br />
            <label htmlFor="" className="my-3">
              Email
            </label>
            <input
              type="email"
              placeholder="enter your email"
              className="form-control "
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "you must enter a valid email",
                },
              })}
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
            <br />
            <label htmlFor="" className="my-3">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="enter your phone number"
              className="form-control "
              {...register("phone", {
                required: "phone is required",
              })}
            />
            {errors.phone && (
              <span className="text-danger">{errors.phone.message}</span>
            )}
          </div>
          <div className="col-lg-6 my-3">
            <label htmlFor="" className="my-3">
              Last Name
            </label>
            <input
              type="text"
              placeholder="enter your last name"
              className="form-control"
              {...register("lastName", {
                required: "last name is required",
              })}
            />
            {errors.lastName && (
              <span className="text-danger">{errors.lastName.message}</span>
            )}
            <br />
            <label htmlFor="" className="my-3">
              Age
            </label>
            <input
              type="text"
              placeholder="enter your age"
              className="form-control"
              {...register("age", {
                required: "age is required",
                max: { value: 55, message: "max age is 55" },
                min: { value: 15, message: "min age is 15" },
              })}
            />
            {errors.age && (
              <span className="text-danger">{errors.age.message}</span>
            )}
            <br />
            <label htmlFor="" className="my-3">
              Birth Date
            </label>
            <input
              type="date"
              placeholder="enter your birth date"
              className="form-control"
              {...register("birthDate", {
                required: "birth date is required",
              })}
            />
            {errors.birthDate && (
              <span className="text-danger">{errors.birthDate.message}</span>
            )}
          </div>
        </div>
        <div className="text-center my-2 p-2">
          <button className="btn btn-warning w-50 p-2 text-white">
            Add User
          </button>
        </div>
      </form>
    </>
  );
}
