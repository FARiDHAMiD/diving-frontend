import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import AxiosInstance from "../utils/AxiosInstance";
import AuthContext from "../Context/AuthContext";

const Product = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProduct();
    getAllProducts();
  }, [id]);

  const getProduct = async () => {
    const response = await AxiosInstance.get(`products/${id}/`);
    setProduct(response.data);
  };

  const getAllProducts = async () => {
    const response = await AxiosInstance.get(`products/`);
    setProducts(response.data);
  };

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = existingCart.some((item) => item.id === product.id);

    if (alreadyInCart) {
      alert("Product already in cart!");
      return;
    }

    const newItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    };

    localStorage.setItem("cart", JSON.stringify([...existingCart, newItem]));
    // 🔔 Notify badge count to update
    window.dispatchEvent(new Event("cartUpdated"));

    alert("Product added to cart!");
  };

  return (
    <div className="container py-4">
      <div className="row">
        {product.image && (
          <div className="position-relative">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid w-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle text-white text-center bg-dark bg-opacity-50 p-3 rounded">
              <h1 className="display-5">{product.title}</h1>
            </div>
          </div>
        )}

        <div className="col-md-4 mt-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Other Products</h5>
              <ul className="list-group list-group-flush mt-3">
                {products
                  .filter((item) => item.id !== product.id)
                  .slice(0, 6)
                  .map((item) => (
                    <li key={item.id} className="list-group-item">
                      <Link
                        to={`/product/${item.id}`}
                        className="text-decoration-none text-dark"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {product.image && (
            <img
              src={product.image}
              alt="Product"
              className="img-fluid mt-4 rounded shadow-sm"
            />
          )}
        </div>

        <div className="col-md-8 mt-4">
          <div className="mb-4">
            <h2>Description</h2>
            <p>{product.description}</p>
            <h3 className="text-success">${product.price}</h3>
            <p>
              <strong>Stock:</strong>{" "}
              {product.stock > 0 ? product.stock : "Out of stock"}
            </p>
            <div className="d-flex gap-3 mt-3">
              <button
                onClick={handleAddToCart}
                className="btn btn-primary"
                disabled={product.stock === 0}
              >
                Add to Cart
              </button>
              <i className="fas fa-heart text-danger fs-4 cursor-pointer" />
            </div>
          </div>

          <div className="bg-light p-4 rounded shadow-sm mb-5">
            <h4>About This Product</h4>
            <p>
              Professionally tested diving gear and accessories for every level
              of experience. <Link to="/courses">Explore courses</Link> to get
              trained before your next dive!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
