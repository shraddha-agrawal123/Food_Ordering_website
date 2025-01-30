import { useContext } from 'react'; // Import useContext
import './FoodItem.css';
import PropTypes from 'prop-types';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/storeContext'; // Import the StoreContext

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext); // Correctly access StoreContext

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />

        {!cartItems[id] ? (
          <img 
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white} // Use the add icon dynamically passed as a prop
            alt="Add item"
          />
        ) : (
          <div className="food-item-counter">
            <img 
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red} // Ensure the remove icon is used correctly
              alt="Remove item"
            />
            <p>{cartItems[id]}</p>
            <img 
              onClick={() => addToCart(id)} 
              src={assets.add_icon_green} 
              alt="Add item"
            />
          </div>
        )}
      </div>

      <div className="food-item-details">
        <p className="food-item-id">ID: {id}</p> {/* Displaying the unique ID */}
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img className="rating-stars" src="/rating_starts.png" alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  id: PropTypes.string.isRequired, // Validate the id as a required string
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodItem;
