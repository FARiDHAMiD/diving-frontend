import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";

import { toast, ToastContainer } from "react-toastify";
import useAuthInterceptor from "../utils/useAuthInterceptor";
import Footer from "./Footer";

const MainLayout = () => {
  useAuthInterceptor(); // Automatically logs out when token is invalid
  const location = useLocation();
  // Define routes that should NOT show header and footer
  const excludedRoutes = ["/login", "/signup"]; // Add or adjust as needed
  const hideLayout = excludedRoutes.includes(location.pathname);

  return (
    <div className="p-2">
      {!hideLayout && <Nav />}
      <ToastContainer className={"text-center"} />
      <Outlet />
      {!hideLayout && <Footer />}
    </div>
  );
};

export default MainLayout;
