import { useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for props validation
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { cartItems } = useContext(StoreContext);

  // Calculate total cart quantity
  const totalCartQuantity = Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);

  return (
    <div className="navbar">
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            className={menu === "menu" ? "active" : ""}
            onClick={() => setMenu("menu")}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            className={menu === "mobile-app" ? "active" : ""}
            onClick={() => setMenu("mobile-app")}
          >
            Mobile app
          </a>
        </li>
        <li>
          <a
            href="#footer"
            className={menu === "contact-us" ? "active" : ""}
            onClick={() => setMenu("contact-us")}
          >
            Contact us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-cart-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Basket" />
            {totalCartQuantity > 0 && (
              <span className="cart-quantity">{totalCartQuantity}</span>
            )}
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

// Add prop types for validation
Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired, // Ensures setShowLogin is a required function
};

export default Navbar;
