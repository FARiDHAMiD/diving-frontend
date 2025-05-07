import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import AxiosInstance from "../utils/AxiosInstance";

const Profile = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [profile, setProfile] = useState([]);
  const [orders, setOrders] = useState([]);

  const getUserProfile = async () => {
    let response = await AxiosInstance.get(`/users/${user.user_id}/`);
    setProfile(response.data);
    console.log(response.data);
  };

  const getUserOrders = async () => {
    try {
      let response = await AxiosInstance.get(`/orders/`); // Assuming your API is setup to return orders for the logged-in user
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error fetching orders");
    }
  };
  useEffect(() => {
    getUserProfile();
    getUserOrders();
  }, []);
  return (
    <section
      className="d-flex justify-content-center align-items-center my-0"
      style={{ backgroundColor: "#5f59f7" }}
    >
      <div className="py-3">
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
                    <button
                      className="btn btn-outline-dark"
                      onClick={logoutUser}
                    >
                      Logout
                    </button>
                  </div>
                </div>
                <div className="orders-list">
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <div className="order-item" key={order.id}>
                        <p>
                          <strong>Order #{order.id}</strong> -{" "}
                          {order.created_at}
                        </p>
                        <p>Total: ${order.total_price}</p>
                        <p>Status: {order.paid ? "Paid" : "Pending"}</p>
                        <a href={`#`} className="text-primary">
                          View Order Details
                        </a>
                      </div>
                    ))
                  ) : (
                    <p>No orders placed yet.</p>
                  )}
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-start align-items-center">
                  <p className="mb-0 text-uppercase">
                    <i className="fas fa-cog me-2" />{" "}
                    <span className="text-muted small">settings</span>
                  </p>
                  <p className="mb-0 text-uppercase">
                    <i className="fas fa-heart ms-4 me-2 text-danger" />{" "}
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
