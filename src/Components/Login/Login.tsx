import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
  interface AuthContextType {
    saveUserData: () => void;
  }
  const { saveUserData } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  interface LoginFormInputs {
    username: string;
    password: string;
  }
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        data
      );
      localStorage.setItem("userToken", response?.data?.accessToken);
      saveUserData();
      toast.success("Logged succesfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Logged failed");
    }
  };
  return (
    <>
      <div className="login-container ">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-5 bg-white rounded p-4">
              <div className="title text-center">
                <h3 className="title-with-bar">User Management System</h3>
                <h4>Sign In</h4>
                <small className="mb-2">
                  Enter your credentials to access your account
                </small>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FaRegUser size={20} />
                <label htmlFor="" className="ms-1">
                  UserName
                </label>
                <input
                  type="text"
                  placeholder="enter your username"
                  className="form-control mt-1"
                  {...register("username", {
                    required: "username is required",
                  })}
                />
                <span className="text-secondary my-1"> try (emilys)</span>
                <br />
                {errors.username && <span>{errors.username.message}</span>}
                <RiLockPasswordFill size={20} />
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  placeholder="enter your password"
                  className="form-control mt-1"
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                <span className="text-secondary my-1"> try (emilyspass)</span>
                {errors.password && <span>{errors.password.message}</span>}
                <div className="submit-btn">
                  <button className="btn btn-warning w-100 my-4">
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
