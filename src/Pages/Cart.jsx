import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../utils/AxiosInstance";
import { ToastContainer, toast } from "react-toastify";
import AuthContext from "../Context/AuthContext";

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const { user } = useContext(AuthContext);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
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

  // Place Order
  const placeOrder = async () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    try {
      const response = await AxiosInstance.post(
        "/orders/",
        {
          user: user.user_id,
          cart_items: cartItems.map((item) => ({
            type: "course", // assuming all items are courses; adjust if you have products
            quantity: item.quantity,
            course_id: item.id, // map to `course_id` instead of `id`
            product_id: item.type === "product" ? item.id : undefined, // for product, map to `product_id`
          })),
          total_price: cartItems
            .reduce(
              (acc, item) => acc + parseFloat(item.price) * item.quantity,
              0
            )
            .toFixed(2),
          payment_method: paymentMethod,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      toast.success("Order placed successfully!");
      localStorage.removeItem("cart"); // optional: clear cart
      navigate("/");
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
          </div>

          {/* Payment Method Selection */}
          <div className="mt-4">
            <label htmlFor="paymentMethod" className="form-label">
              Select Payment Method:
            </label>
            <select
              id="paymentMethod"
              className="form-select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="cash">Cash on Delivery</option>
              <option value="visa">Visa</option>
            </select>
          </div>

          {/* Visa Card Info Form */}
          {paymentMethod === "visa" && (
            <div className="mt-4">
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">
                  Card Number:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  value={cardInfo.cardNumber}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, cardNumber: e.target.value })
                  }
                  placeholder="Enter your card number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="expiryDate" className="form-label">
                  Expiry Date:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryDate"
                  value={cardInfo.expiryDate}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, expiryDate: e.target.value })
                  }
                  placeholder="MM/YY"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cvv" className="form-label">
                  CVV:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  value={cardInfo.cvv}
                  onChange={(e) =>
                    setCardInfo({ ...cardInfo, cvv: e.target.value })
                  }
                  placeholder="CVV"
                />
              </div>
            </div>
          )}

          {/* Place Order Button */}
          <div className="d-flex justify-content-between align-items-center">
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
