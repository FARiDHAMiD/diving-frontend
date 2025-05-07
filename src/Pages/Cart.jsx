import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../utils/AxiosInstance";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/ReactToastify.min.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const navigate = useNavigate();

  // Sync cartItems to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cartItems]);

  // Update item quantity
  const updateQuantity = (index, delta) => {
    const newCart = [...cartItems];
    newCart[index].quantity = Math.max(1, newCart[index].quantity + delta);
    setCartItems(newCart);
  };

  // Remove item
  const removeItem = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  // Handle Checkout
  const handleCheckout = () => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {
      console.error("Your cart is empty.");
      return;
    }

    // Send cart items to the backend
    AxiosInstance.post(
      "/cart/checkout",
      { cartItems },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    )
      .then((response) => {
        // Clear cart after placing the order
        localStorage.removeItem("cart");

        // Optionally show a success toast
        toast.success("Order placed successfully!");
        navigate("/"); // Redirect to a success page
        window.dispatchEvent(new Event("cartUpdated"));
      })
      .catch((error) => {
        console.error("Error during checkout:", error);
        toast.error("Error placing the order.");
      });
  };

  const placeOrder = async () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    try {
      const response = await AxiosInstance.post(
        "/cart/checkout",
        {
          cart_items: cartItems,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      console.log(response.data);
      toast.success("Order placed successfully!");
      localStorage.removeItem("cart"); // optional: clear cart
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error(error.response.data);
      toast.error("Checkout failed: " + error.response.data.detail);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Your Cart</h2>
      <ToastContainer />
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <img
                  src={item.image || "/placeholder.jpg"}
                  alt={item.title}
                  className="me-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <div className="flex-grow-1">
                  <h5>{item.title}</h5>
                  <p className="mb-1">
                    <strong>Price:</strong> EGP {item.price}
                  </p>
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(index, -1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(index, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(index)}
                >
                  🗑 Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center">
            <h4>
              Total: EGP
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </h4>
            <button className="btn btn-success m-1" onClick={placeOrder}>
              ✅ Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
