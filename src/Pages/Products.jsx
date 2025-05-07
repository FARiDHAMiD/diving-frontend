import React, { useEffect, useState } from "react";
import "./course.css"; // reuse same styles or separate later if needed
import AxiosInstance from "../utils/AxiosInstance";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [price, setPrice] = useState("All");
  const [stock, setStock] = useState("All");

  const getProducts = async () => {
    try {
      const response = await AxiosInstance.get("products/");
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Filtering logic
  const filteredProducts = products
    .filter((product) =>
      stock === "All"
        ? true
        : stock === "In Stock"
        ? product.stock > 0
        : product.stock === 0
    )
    .sort((a, b) => {
      if (price === "Low to High") return a.price - b.price;
      if (price === "High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container">
      <section className="hero">
        <div className="hero-content">
          <h1>Explore Diving Gear</h1>
          <p className="hero-desc">Find everything you need for your diving adventures.</p>
        </div>
      </section>

      {/* Filters */}
      <div className="filters">
        <div className="row">
          <div className="col-6">
            
        <select className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="All">Price</option>
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>
        </select>
          </div>
          <div className="col-6">
        <select className="form-control" value={stock} onChange={(e) => setStock(e.target.value)}>
          <option value="All">Available</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

          </div>
        </div>
      </div>

      <section className="courses" id="products">
        <h2>Available Products</h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4">
                <div className="course-card">
                  <i
                    className="fa-regular fa-heart heart"
                    onClick={(e) => window.toggleHeart(e.target)}
                  ></i>
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: "320px",
                          height: "220px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                    <h3 className="text-success">{product.title}</h3>
                    <div className="col-md-6">
                      <div className="course-info">
                        <p className="price">Price: EGP {product.price}</p>
                        <p className="duration">
                          Stock: {product.stock > 0 ? product.stock : "Out of Stock"}
                        </p>
                        <div className="rating">
                          <span className="stars">★★★★★</span>
                          <span className="rating-value">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={`/product/${product.id}`} className="view-details">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
