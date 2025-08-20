import React from "react";

export default function AddUser() {
  return (
    <>
      <div>
        <h4 className="p-2">Add User</h4>
        <hr />
      </div>

      <form className="m-5 shadow-lg p-3 ">
        <div className="row text-secondary">
          <div className="col-lg-6 my-3 ">
            <label htmlFor="" className="my-3">
              First Name
            </label>
            <input
              type="text"
              placeholder="enter your first name"
              className="form-control"
              // {...register("username", {
              //   required: "username is required",
              // })}
            />
            {/* {errors.username && <span>{errors.username.message}</span>} */}
            <label htmlFor="" className="my-3">
              Email
            </label>
            <input
              type="email"
              placeholder="enter your email"
              className="form-control"
              // {...register("password", {
              //   required: "password is required",
              // })}
            />
            {/* {errors.password && <span>{errors.password.message}</span>} */}
            <label htmlFor="" className="my-3">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="enter your phone number"
              className="form-control"
              // {...register("username", {
              //   required: "username is required",
              // })}
            />
            {/* {errors.username && <span>{errors.username.message}</span>} */}
          </div>
          <div className="col-lg-6 my-3">
            <label htmlFor="" className="my-3">
              Last Name
            </label>
            <input
              type="text"
              placeholder="enter your last name"
              className="form-control"
              // {...register("username", {
              //   required: "username is required",
              // })}
            />
            {/* {errors.username && <span>{errors.username.message}</span>} */}
            <label htmlFor="" className="my-3">
              Age
            </label>
            <input
              type="number"
              placeholder="enter your age"
              className="form-control"
              // {...register("password", {
              //   required: "password is required",
              // })}
            />
            {/* {errors.password && <span>{errors.password.message}</span>} */}
            <label htmlFor="" className="my-3">
              Birth Date
            </label>
            <input
              type="text"
              placeholder="enter your birth date"
              className="form-control"
              // {...register("username", {
              //   required: "username is required",
              // })}
            />
            {/* {errors.username && <span>{errors.username.message}</span>} */}
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
