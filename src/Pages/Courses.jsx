import React, { useEffect, useState } from "react";
import Scripts from "../components/Scripts"; // adjust path if needed
import "./course.css";
import AxiosInstance from "../utils/AxiosInstance";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { toast } from "react-toastify";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterApplied, setFilterApplied] = useState(false);

  // Filter states
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("All");

  const getCourses = async () => {
    let response = await AxiosInstance.get(`courses/`);
    setCourses(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getCourses();
  }, []);

  // Filtering logic
  const filteredCourses = courses
    .filter((course) => level === "" || course.level === level)
    .filter((course) => location === "" || course.location === location)
    .sort((a, b) => {
      if (price === "Low to High") return a.price - b.price;
      if (price === "High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          {/* <img
            src="/assets/photos/image 997.png"
            alt="Diving"
            className="hero-bg"
          /> */}
          <div className="hero-content">
            <h1>Start Your Diving Journey</h1>
            <p className="hero-desc">
              From Beginners To Advanced Divers, Find The Right Course For You
            </p>
          </div>
        </section>

        {/* Add this below your Filter section, or wherever appropriate */}
        <Scripts
          level={level}
          setLevel={(val) => {
            setLevel(val);
            setFilterApplied(true);
          }}
          price={price}
          setPrice={(val) => {
            setPrice(val);
            setFilterApplied(true);
          }}
          location={location}
          setLocation={(val) => {
            setLocation(val);
            setFilterApplied(true);
          }}
        />
        {/* Filtered Results  */}
        {filterApplied && (
          <section className="courses" id="courses">
            <h2>Filtered Courses</h2>
            <div className="row">
              {filteredCourses.map((course) => (
                <div key={course.id} className="col-md-4">
                  <div className="course-card">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <img
                          src={course.image}
                          alt={course.title}
                          style={{
                            width: "320px",
                            height: "220px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                      <h3 className="text-success">{course.title}</h3>
                      <div className="col-md-6">
                        <div className="course-info">
                          <p className="price">Price: EGP {course.price}</p>
                          <p className="duration">
                            {course.number_of_days} Days
                          </p>
                          <p className="instructor">{course.location}</p>
                          <div className="rating">
                            <span className="stars">★★★★★</span>
                            <span className="rating-value">5.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to={`/course/${course.id}`} className="view-details">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Example Course Section (shortened) */}
        <section className="courses" id="courses">
          <h2>Beginner Courses</h2>
          <div>
            {loading ? (
              <Spinner />
            ) : (
              <div className="row">
                {courses
                  .filter((course) => course.level === "Beginner")
                  .map((course) => (
                    <div key={course.id} className="col-md-4">
                      <div className="course-card">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <img
                              src={course.image}
                              alt="Open Water"
                              style={{
                                width: "320px",
                                height: "220px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                            />
                          </div>
                          <h3 className="text-success">{course.title}</h3>
                          <div className="col-md-6">
                            <div className="course-info">
                              <p className="price">Price: EGP {course.price}</p>
                              <p className="duration">
                                {course.number_of_days} Days
                              </p>
                              <p className="instructor">{course.location}</p>
                              <div className="rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-value">5.0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          to={`/course/${course.id}`}
                          className="view-details"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                {/* Repeat for other cards... */}
              </div>
            )}
          </div>
        </section>
        <hr />
        {/* Example Course Section (shortened) */}
        <section className="courses" id="courses">
          <h2>Advanced Courses</h2>
          <div>
            {loading ? (
              <Spinner />
            ) : (
              <div className="row">
                {courses
                  .filter((course) => course.level === "Advanced")
                  .map((course) => (
                    <div key={course.id} className="col-md-4">
                      <div className="course-card">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <img
                              src={course.image}
                              alt="Open Water"
                              style={{
                                width: "320px",
                                height: "220px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                            />
                          </div>
                          <h3 className="text-success">{course.title}</h3>
                          <div className="col-md-6">
                            <div className="course-info">
                              <p className="price">Price: EGP {course.price}</p>
                              <p className="duration">
                                {course.number_of_days} Days
                              </p>
                              <p className="instructor">{course.location}</p>
                              <div className="rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-value">5.0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          to={`/course/${course.id}`}
                          className="view-details"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                {/* Repeat for other cards... */}
              </div>
            )}
          </div>
        </section>
        <hr />
        {/* Example Course Section (shortened) */}
        <section className="courses" id="courses">
          <h2>Professional Courses</h2>
          <div>
            {loading ? (
              <Spinner />
            ) : (
              <div className="row">
                {courses
                  .filter((course) => course.level === "Professional")
                  .map((course) => (
                    <div key={course.id} className="col-md-4">
                      <div className="course-card">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <img
                              src={course.image}
                              alt="Open Water"
                              // maxwidth={320}
                              style={{
                                width: "320px",
                                height: "220px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                            />
                          </div>
                          <h3 className="text-success">{course.title}</h3>
                          <div className="col-md-6">
                            <div className="course-info">
                              <p className="price">Price: EGP {course.price}</p>
                              <p className="duration">
                                {course.number_of_days} Days
                              </p>
                              <p className="instructor">{course.location}</p>
                              <div className="rating">
                                <span className="stars">★★★★★</span>
                                <span className="rating-value">5.0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Link
                          to={`/course/${course.id}`}
                          className="view-details"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                {/* Repeat for other cards... */}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;
