export default function Login() {
  return (
    <>
      <div className="login-container ">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-md-5 bg-white rounded p-4">
              <div className="title text-center">
                <h3 className="title-with-bar">User Management System</h3>
                <h4>Sign In</h4>
                <small>Enter your credentials to access your account</small>
              </div>
              <form>
                <label htmlFor="">UserName</label>
                <input
                  type="text"
                  placeholder="enter your username"
                  className="form-control"
                />
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  placeholder="enter your password"
                  className="form-control"
                />
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
