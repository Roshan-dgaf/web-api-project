import React from 'react'
import { assets } from '../../assets/assets'
import NavLogo from "../../assets/recipelogo.png"
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={NavLogo} alt="navImg" style={{ width: "auto", height: "120px" }} />
          <p>Explore a world of flavors with our curated collection of mouthwatering recipes. From quick and easy meals to gourmet delights, each recipe is crafted to inspire your culinary journey. Start cooking and share your favorite dishes with the community today!

          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Useful Links</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Recipes</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+977-9812345678</li>
            <li>contact@roshanbaidar.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © recipes.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
