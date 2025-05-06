import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../utils/AxiosInstance";

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const navigate = useNavigate();

  // Add to cart
  const addToCart = (item) => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
      return;
    }

    // If logged in, send to backend and update localStorage
    AxiosInstance.post("/cart/add", item, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    })
    .then(response => {
      // Update localStorage after adding to cart
      setCartItems([...cartItems, item]);
      localStorage.setItem("cart", JSON.stringify([...cartItems, item]));
    })
    .catch(error => {
      console.error("Error adding to cart:", error);
    });
  };

  // Handle Checkout
  const handleCheckout = () => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    } else {
      // You can call an API to submit the order
      AxiosInstance.post("/cart/checkout", { cartItems }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        }
      }).then(response => {
        console.log("Order submitted successfully.");
        // Redirect or clear cart
      }).catch(error => {
        console.error("Error during checkout:", error);
      });
    }
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.title}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="total-price">
        <strong>Total: ${cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</strong>
      </div>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
