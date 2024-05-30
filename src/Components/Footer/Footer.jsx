import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="upper-head">
        <div className="head-container">
          <h1>
            CSS-Tricks is powered by <span>DigitalOcean.</span>
          </h1>
        </div>
        <div className="subscribtionForm">
          <h1 className="footer-heading">KEEP UP TO DATE ON WEB DEV</h1>
          <p>with our hand-crafted newsletter</p>
          <div className="form-container">
            <div className="input-container">
              <input className="subs-input" type="text" />
            </div>
            <div className="btn-container">
              <button className="subsBtn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footerList">
        <ul>
          <li>DIGITALOCEAN</li>
          <li>DigitalOcean</li>
          <li>DigitalOcean Community</li>
          <li>About DigitalOcean</li>
          <li>Legal</li>
          <li>Free Credit Offer</li>
        </ul>
        <ul>
          <li>CSS-TRICKS</li>
          <li>DigitalOcean</li>
          <li>DigitalOcean Community</li>
          <li>About DigitalOcean</li>
          <li>Legal</li>
          <li>Free Credit Offer</li>
        </ul>
        <ul>
          <li>FOLLOW</li>
          <li>DigitalOcean</li>
          <li>DigitalOcean Community</li>
          <li>About DigitalOcean</li>
          <li>Legal</li>
        </ul>
        <ul>
          <li>DigitalOcean Community</li>
          <li>About DigitalOcean</li>
          <li>Legal</li>
          <li>Free Credit Offer</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
