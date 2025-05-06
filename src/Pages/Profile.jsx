import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import AxiosInstance from "../utils/AxiosInstance";

const Profile = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [profile, setProfile] = useState([]);

  const getUserProfile = async () => {
    let response = await AxiosInstance.get(`/users/${user.user_id}/`);
    setProfile(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <section
      className="d-flex justify-content-center align-items-center my-0"
      style={{ backgroundColor: "#5f59f7" }}
    >
      <div className="container py-3">
        <div className="row h-50">
          <div className="col col-xl-12">
            <div className="card mb-3" style={{ borderRadius: 15 }}>
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-8">
                    
                <h3 className="mb-3">
                  {profile.first_name} {profile.last_name}
                </h3>
                  </div>
                  <div className="col-4 text-end">
                    <button className="btn btn-outline-dark" onClick={logoutUser}>Logout</button>
                  </div>
                </div>
                <p className="small mb-0">
                  <i className="far fa-star fa-lg" />{" "}
                  <span className="mx-2">|</span> Order No.
                  <strong>#15556008</strong> on 11 April , 2021 <span className="text-primary">Details</span>
                </p>
                <hr className="my-4" />
                <div className="d-flex justify-content-start align-items-center">
                  <p className="mb-0 text-uppercase">
                    <i className="fas fa-cog me-2" />{" "}
                    <span className="text-muted small">settings</span>
                  </p>
                  <p className="mb-0 text-uppercase">
                    <i className="fas fa-heart ms-4 me-2 text-danger"  />{" "}
                    <span className="text-muted small">Favorite Items</span>
                  </p>
                  <p className="mb-0 text-uppercase">
                    <i className="fas fa-ellipsis-h ms-4 me-2" />{" "}
                    <span className="text-muted small">program link</span>
                    <span className="ms-3 me-4">|</span>
                  </p>
                  <a href="#!">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                      alt="avatar"
                      className="img-fluid rounded-circle me-3"
                      width={35}
                    />
                  </a>
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-outline-dark btn-sm btn-floating"
                  >
                    <i className="fas fa-plus text-body" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
