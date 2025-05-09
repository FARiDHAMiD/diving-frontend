import React, { useContext, useEffect, useState } from "react";
import "./course.css";
import AxiosInstance from "../utils/AxiosInstance";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";

const Course = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext); // assuming 'user' holds the current user
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});

  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  const getCourses = async () => {
    let response = await AxiosInstance.get(`courses/`);
    setCourses(response.data);
  };

  const getCourse = async () => {
    let response = await AxiosInstance.get(`courses/${id}/`);
    setCourse(response.data);
  };

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const isAlreadyInCart = existingCart.some((item) => item.id === course.id);
    if (isAlreadyInCart) {
      alert("Course already in cart!");
      return;
    }

    const newCartItem = {
      id: course.id,
      title: course.title,
      image: course.image,
      price: course.price,
      quantity: 1,
    };

    const updatedCart = [...existingCart, newCartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // 🔔 Notify badge count to update
    window.dispatchEvent(new Event("cartUpdated"));

    alert("Added to cart!");
  };

  const fetchUserProfile = async () => {
    try {
      const response = await AxiosInstance.get("profiles/me/");
      const favorites = response.data.favorites || [];

      // Check if the current course is in the favorites list by comparing their ids
      setIsFavorite(favorites.some((fav) => fav.id === course.id));
    } catch (error) {
      toast.error("Failed to fetch user profile:", error);
    }
  };

  useEffect(() => {
    getCourses();
    getCourse();
  }, [id]);

  useEffect(() => {
    if (course.id) {
      fetchUserProfile();
    }
  }, [course.id]);

  const handleToggleFavorite = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const response = await AxiosInstance.post(
        `profiles/${course.id}/toggle_favorite/`
      );
      if (response.data.status === "added") {
        setIsFavorite(true);
      } else if (response.data.status === "removed") {
        setIsFavorite(false);
      }
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
    }
  };

  return (
    <div className="container py-4">
      <div className="row">
        {course.image && (
          <div className="position-relative">
            <img
              src={course.image}
              alt="Course"
              className="img-fluid w-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-50 p-3 rounded">
              <h1 className="display-5">{course.title}</h1>
            </div>
          </div>
        )}
        {/* Sidebar with course list */}
        <div className="col-md-4 mb-4">
          <h2 className="mb-3">Courses</h2>
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-chevron-down me-2 text-primary" />
                Beginner Courses
              </h5>
              <ul className="list-group list-group-flush mt-3">
                {courses
                  .filter((course) => course.level === "Beginner")
                  .map((item) => (
                    <li key={item.id} className="list-group-item">
                      <Link
                        to={`/course/${item.id}`}
                        className="text-decoration-none text-dark"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
              <hr />
              <h5 className="card-title">
                <i className="fas fa-chevron-down me-2 text-primary" />
                Advanced Courses
              </h5>

              <ul className="list-group list-group-flush mt-3">
                {courses
                  .filter((course) => course.level === "Advanced")
                  .map((item) => (
                    <li key={item.id} className="list-group-item">
                      <Link
                        to={`/course/${item.id}`}
                        className="text-decoration-none text-dark"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
              <hr />
              <h5 className="card-title">
                <i className="fas fa-chevron-down me-2 text-primary" />
                Professional Courses
              </h5>

              <ul className="list-group list-group-flush mt-3">
                {courses
                  .filter((course) => course.level === "Professional")
                  .map((item) => (
                    <li key={item.id} className="list-group-item">
                      <Link
                        to={`/course/${item.id}`}
                        className="text-decoration-none text-dark"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <img
            src={course.image}
            alt="Course"
            className="img-fluid mt-4 rounded shadow-sm"
          />
        </div>

        {/* Course Overview */}
        <div className="col-md-8 mb-4">
          <div className="mb-4">
            <h2>Course Overview</h2>
            <p>{course.description}</p>
            <div className="d-flex align-items-center gap-3 mt-3">
              <button
                onClick={handleAddToCart}
                className="btn btn-primary me-2"
              >
                Add to Cart
              </button>
              <i
                className={`fas fa-heart fs-4 cursor-pointer ${
                  isFavorite ? "text-danger" : "text-secondary"
                }`}
                onClick={handleToggleFavorite}
              />
            </div>
          </div>

          {/* What's included */}
          <div className="mb-5">
            <h3>What's Included</h3>
            <ul className="list-group list-group-flush">
              {course.features?.map((f) => (
                <li key={f.id} className="list-group-item">
                  {f.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements & Learning Points */}
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h4 className="card-title">
                    <i className="fas fa-paperclip me-2" />
                    Requirements
                  </h4>
                  <ul className="list-unstyled mt-3">
                    <li>
                      <strong>
                        <i className="fas fa-user me-2" />
                        Age:
                      </strong>{" "}
                      {course.min_age}
                    </li>
                    <li>
                      <strong>
                        <i className="fas fa-clock me-2" />
                        Time:
                      </strong>{" "}
                      {course.required_time}
                    </li>
                    <li>
                      <strong>
                        <i className="fas fa-water me-2" />
                        Max Depth:
                      </strong>{" "}
                      {course.max_depth}
                    </li>
                    <li>
                      <strong>
                        <i className="fas fa-heartbeat me-2" />
                        Health:
                      </strong>{" "}
                      {course.health_notes}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h4 className="card-title">
                    <i className="fas fa-paperclip me-2" />
                    What You'll Learn
                  </h4>
                  <ul className="list-unstyled mt-3">
                    {course.learning_points?.map((point) => (
                      <li key={point.id}>
                        <i className="fa-regular fa-circle-check me-2 text-success" />
                        {point.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Gear section */}
          <div className="bg-light p-4 rounded shadow-sm mb-5">
            <h4>Don't Have Your Own Gear Yet?</h4>
            <p>
              We Have High Quality Diving Equipment.{" "}
              <Link
                target="_blank"
                to="/products"
                className="text-primary text-decoration-underline"
              >
                Shop Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
