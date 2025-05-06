import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const PrivateRoute = () => {
  // console.log("Private routing here ...");
  let { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
