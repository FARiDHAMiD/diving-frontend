import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthInterceptor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: "http://localhost:8000/api",
    });

    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          navigate("/login"); // Redirect to login
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject();
    };
  }, [navigate]);
};

export default useAuthInterceptor;
