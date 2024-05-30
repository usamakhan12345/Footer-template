import React from "react";
import "./styles.css";
import MailIcon from "../../assets/mail 1.png";
import FB from "../../assets/fb.png";
import X from "../../assets/x.png";
import Instragram from "../../assets/instaz.png";
import linkin from "../../assets/linkin.png";
import rightArrow from "../../assets/rightArrow.png";
import LogoImg from "../../assets/LogoImg.png";
import HeaderImg from "../../assets/headerImg.png";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="lower-header-container">
        <div className="LogoContainer">
          <img src={LogoImg} alt="" />
        </div>
        <div className="NamelistContainer">
          <ul className="header-list">
            <li>Home</li>
            <li>Product</li>
            <li>Services </li>
            <li>Career</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className="upperHeader">
        <div className="items-container">
          <div className="listContainer">
            <div className="mailContainer">
              <div className="mailCon">
                <img src={MailIcon} alt="mail icon" />
              </div>
              <p className="email">abcd@gamil.com</p>
            </div>
            <div className="SociallistContainer">
              <div className="socialIcon">
                <img className="social-img" src={FB} alt="" />
              </div>
              <div className="socialIcon">
                <img className="social-img" src={X} alt="" />
              </div>{" "}
              <div className="socialIcon">
                <img className="social-img" src={Instragram} alt="" />
              </div>{" "}
              <div className="socialIcon">
                <img className="social-img" src={linkin} alt="" />
              </div>
            </div>
            <div className="contact-us">
              <div className="socialIcon arrow-icon">
                <img className="social-img" src={rightArrow} alt="" />
              </div>
              <div className="contact-container">
                <h3>CONTACT US</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
