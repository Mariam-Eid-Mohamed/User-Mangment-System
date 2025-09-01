import usersImg from "../../assets/images/usersImg.png";

import BannerImg2 from "../../assets/images/banner-img2.png";
export default function Home() {
  return (
    <>
      <div className="container-fluid  m-0 p-0 vh-100">
        <div className="row p-0 m-0 h-100 w-100">
          <div className="col-md-6 h-100 position-relative m-0 p-0">
            <div className="img-container w-100 h-100">
              <img
                src={BannerImg2}
                alt="banner image"
                className="img-fluid w-100 h-100  object-fit-cover"
              />
              <div className="home-content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-start p-4">
                <h2>User Mangment System</h2>
                <p>
                  UMS allows administrators to manage users effectively by
                  adding, deleting, and updating accounts, while assigning roles
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-none d-md-flex d-flex flex-column justify-content-end ">
            <div className="img-container  ">
              <img src={usersImg} alt="users image" className="img-fluid " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
