import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { state } = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Order placed successfully!", formData);
    // Add API call or further processing here
  };

  useEffect(() => {
    if (!state) {
      // Redirect to cart if no order data is available
      window.location.href = "/cart";
    }
  }, [state]);

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Street"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        <div className="multi-fields">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            placeholder="Zip code"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${state?.subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${state?.deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${state?.finalTotal.toFixed(2)}</b>
            </div>
          </div>
          <button type="submit" className="submit-button">
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
