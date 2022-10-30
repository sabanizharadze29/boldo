import React from "react";
import "./footer.css";
import LogoBlue from "../../assets/logoBlue.png";
const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="container footer-container">
        <div className="footer-left">
          <img src={LogoBlue} alt="" />
          <h1 className="secondary-font">Boldo</h1>
          <p className="footer-left-text">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className="footer-left-copyright">All rights reserved.</p>
        </div>
        <div className="footer-right">
          <div className="footer-right-content">
            <h1>Landings</h1>
            <ul className="footer-right-content-list">
              <li>Home</li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="footer-right-content">
            <h1>Company</h1>
            <ul className="footer-right-content-list">
              <li>Home</li>
              <li className="footer-right-hiring-item">Careers</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="footer-right-content">
            <h1>Resources</h1>
            <ul className="footer-right-content-list">
              <li>Blog</li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
