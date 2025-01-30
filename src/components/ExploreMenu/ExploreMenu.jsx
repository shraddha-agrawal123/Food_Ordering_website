import PropTypes from 'prop-types';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a deal</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index} // Add a unique key for React
              className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`} // Add "active" class for the current category
              onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))} // Toggle category
            >
              <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

// Define PropTypes
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired, // Validate that 'category' is a string and required
  setCategory: PropTypes.func.isRequired, // Validate that 'setCategory' is a function and required
};

export default ExploreMenu;
