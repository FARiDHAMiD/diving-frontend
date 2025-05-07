import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Nav = () => {
  const { user } = useContext(AuthContext);
  const [cartCount, setCartCount] = useState(0);

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  const updateCartCount = () => {
    try {
      const cartRaw = localStorage.getItem("cart");
      const cartItems = cartRaw ? JSON.parse(cartRaw) : [];

      const totalItems = cartItems.reduce(
        (total, item) => total + (item.quantity || 1),
        0
      );

      setCartCount(totalItems);
    } catch (err) {
      console.error("Invalid cart data in localStorage", err);
      setCartCount(0);
    }
  };

  useEffect(() => {
    updateCartCount();
  
    const handleStorageChange = (e) => {
      if (e.key === "cart") {
        updateCartCount();
      }
    };
  
    const handleCartUpdated = () => {
      updateCartCount();
    };
  
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartUpdated", handleCartUpdated);
  
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);
  

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/Frame 88.svg" alt="Logo" />
        <span>Plunge</span>
      </div>

      <div className="nav-links">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About Us</NavLink>
        <NavLink to="/courses" className={linkClass}>Courses</NavLink>
        <NavLink to="/products" className={linkClass}>Products</NavLink>
        <NavLink to="/profile" className={linkClass}>
          {user ? user.username : "Account"}
        </NavLink>
      </div>

      <div className="nav-icons d-flex align-items-center">
        <i className="fas fa-search me-3" />
        <i className="fa-regular fa-user me-3" />

        <Link to="/cart" className="position-relative me-3">
          <i className="fas fa-shopping-cart fs-5" />
          {cartCount > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.7rem" }}
            >
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
