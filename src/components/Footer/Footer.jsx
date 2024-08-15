import './Footer.css'
import { assets } from './../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>

  <div className="footer-content">
    <div className="footer-content-left">
       <img src={assets.logo} alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo necessitatibus fugiat consequuntur ab sunt laboriosam saepe, odit architecto et? Mollitia minima voluptates laboriosam amet in vero, ullam ducimus. Labore!</p>
         <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
    </div>
    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>delivery</li>
            <li>Privacy policy</li>
        </ul>
    </div>
    <div className="footer-content-right">
         <h2>GET IN TOUCH</h2>
         <ul>
            <li>91+8187860491</li>
            <li>contact@tomato.com</li>
         </ul>
    </div>
    
  </div>
  <hr />
  <p className='footer-copyright'>CopyRight @ 2024</p>
    </div>
  )
}

export default Footer