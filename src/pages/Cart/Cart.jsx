import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [error, setError] = useState("");

  const cartData = Object.entries(cartItems).map(([id, quantity]) => {
    const item = food_list.find((food) => food._id === id);
    return {
      id,
      title: item ? item.name : "Unknown Item",
      price: item ? item.price : 0,
      quantity,
      total: item ? item.price * quantity : 0,
      image: item ? item.image : "",
    };
  });

  const subtotal = cartData.reduce((sum, item) => sum + item.total, 0);
  const deliveryFee = subtotal > 0 ? 2 : 0; // Apply delivery fee only if subtotal > 0
  const grandTotal = subtotal + deliveryFee;

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    if (promoCode === "DISCOUNT10") {
      setPromoApplied(true);
      setError("");
    } else {
      setPromoApplied(false);
      setError("Invalid promo code");
    }
  };

  const discount = promoApplied ? 0.1 * subtotal : 0;
  const finalTotal = grandTotal - discount;

  const handleProceedToCheckout = () => {
    navigate('/order', {
      state: {
        subtotal,
        deliveryFee,
        finalTotal,
      },
    });
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {cartData.length > 0 ? (
          cartData.map((item, index) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <p>{index + 1}</p>
              <p>{item.title}</p>
              <p>${item.price.toFixed(2)}</p>
              <p>{item.quantity}</p>
              <p>${item.total.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        {cartData.length > 0 && (
          <div className="cart-total">
            <h3>Grand Total: ${finalTotal.toFixed(2)}</h3>
          </div>
        )}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            {deliveryFee > 0 && (
              <>
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${deliveryFee.toFixed(2)}</p>
                </div>
                <hr />
              </>
            )}
            <div className="cart-total-details">
              <b>Total</b>
              <b>${finalTotal.toFixed(2)}</b>
            </div>
          </div>
          <button onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promo code, enter it here:</p>
          <form onSubmit={handlePromoSubmit}>
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button type="submit">Apply</button>
          </form>
          {promoApplied && <p>Promo code applied! You get a 10% discount.</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
