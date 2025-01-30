import FoodItem from '../FoodItem/FoodItem';
import { useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext.jsx';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext); // Getting food_list from context

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {/* Filter items based on the category and then map */}
        {food_list
          .filter((item) => category === "All" || category === item.category) // Apply filter logic here
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

// Validate props using PropTypes
FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired, // Ensure category is a required string
};

export default FoodDisplay;
