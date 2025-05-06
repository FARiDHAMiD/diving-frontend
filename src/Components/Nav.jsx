import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Nav = () => {
  const linkClass = ({ isActive }) => (isActive ? "active" : "");
  const {user} = useContext(AuthContext);
  return (
    <div className="navbar">
      {/* الشعار */}
      <div className="logo">
        <img src="/assets/Frame 88.svg" alt="Logo" />
        <span>Plunge</span>
      </div>
      {/* الروابط */}
      <div className="nav-links">
        <NavLink to={`/`} className={linkClass}>
          Home
        </NavLink>
        <NavLink to={`/about`} className={linkClass}>
          About Us
        </NavLink>
        <NavLink to={`/courses`} className={linkClass}>
          Courses
        </NavLink>
        <NavLink to={`/products`} className={linkClass}>
          Products
        </NavLink>
        <NavLink to={`/profile`} className={linkClass}>
        {user ? (

          user.username
        ):(
        'Account'
        )}
        </NavLink>
      </div>
      {/* الأيقونات */}
      <div className="nav-icons">
        <i className="fas fa-search" />
        <i className="fa-regular fa-user" />
        <Link to={"/cart"}>
          <span className="material-symbols-outlined" title="Cart">
            shopping_cart
          </span>
        </Link>
        {/* <i class="fas fa-shopping-cart"></i> */}
      </div>
    </div>
  );
};

export default Nav;
