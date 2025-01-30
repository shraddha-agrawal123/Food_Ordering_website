import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { useState } from 'react';
import { assets } from '../../assets/assets';
import './loginpopup.css';

const LoginPopup = ({ setShowLogin }) => { // Destructure 'setShowLogin' from props
  const [currState, setCurrState] = useState("Login"); // Fixed initial state typo

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        {/* Title Section */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)} // Close popup when cross icon is clicked
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        {/* Inputs Section */}
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>

        {/* Submit Button */}
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms and Conditions */}
        {currState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              By continuing, I agree to the terms of use & privacy policy.
            </p>
          </div>
        )}

        {/* Toggle Between Login and Sign Up */}
        <p className="login-popup-toggle">
          {currState === "Login" ? (
            <>
              Already have an account?{" "}
              <span
                className="toggle-link"
                onClick={() => setCurrState("Sign Up")}
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Create a new account?{" "}
              <span
                className="toggle-link"
                onClick={() => setCurrState("Login")}
              >
                Click here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

// Prop validation using PropTypes
LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // Validate that setShowLogin is a function and required
};

export default LoginPopup;
