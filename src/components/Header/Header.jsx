import headerImg from '../../assets/header_img.png';

import './Header.css';

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes...</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
