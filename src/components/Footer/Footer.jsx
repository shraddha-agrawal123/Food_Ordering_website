 import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>A Food Delivery Partner</p>
            <div className="footer-social-icon">
               <img src={assets.facebook_icon} alt="" />
               <img src={assets.twitter_icon} alt=""/>
               <img src={assets.linkedin_icon} alt=""/>
            </div>
            </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>9876345543</li>
                <li>Contact@gmail.com</li>
            </ul>
             </div>

        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 Tomato.com-All Right Reserved.</p>
    </div> 
    
      
  )
}

export default Footer
