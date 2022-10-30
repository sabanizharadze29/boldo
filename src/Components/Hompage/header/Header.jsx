import React from "react";
import Nav from "../../../Components/nav/Nav";
import "./header.css";
import sliderLogo1 from "../../../assets/sliderLogo1.png";
import sliderLogo2 from "../../../assets/sliderLogo2.png";
import HeaderGraphics from "../../../assets/headergraphics.svg";
const Header = () => {
  return (
    <div className="header container-fluid">
      <section className="header-section container">
        <Nav theme={"light"} />
        <div className="header-content container">
          <div className="header-content-left">
            <h1 className="secondary-font">
              Save time by building fast with Boldo Template{" "}
            </h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="header-buttons">
              <button className="buy-template-btn main-transition">
                Buy template
              </button>
              <button className="expore-template-btn main-transition">
                Explore
              </button>
            </div>
          </div>
          <div className="header-content-right">
            <img src={HeaderGraphics} alt="" />
          </div>
        </div>
        <div className="slider-logo-wrapper">
          <div className="gradient-black"></div>
          <div className="slider-logo-container">
            <div className="logo-wrapper">
              <img src={sliderLogo1} alt="" />
            </div>
            <div className="logo-wrapper">
              <img src={sliderLogo2} alt="" />
            </div>
            <div className="logo-wrapper">
              <img src={sliderLogo1} alt="" />
            </div>
            <div className="logo-wrapper">
              <img src={sliderLogo2} alt="" />
            </div>
            <div className="logo-wrapper">
              <img src={sliderLogo1} alt="" />
            </div>
            <div className="logo-wrapper">
              <img src={sliderLogo2} alt="" />
            </div>
          </div>
          <div className="slider-logo-container">
            <div className="logo-wrapper">
              <img src={sliderLogo1} alt="" />
            </div>
            <div className="logo-wrapper">
              <img src={sliderLogo2} alt="" />
            </div>
            <div className="logo-wrapper">
              <img src={sliderLogo1} alt="" />
            </div>
            <div className="logo-wrapper">
              <img src={sliderLogo2} alt="" />
            </div>
            <div className="logo-wrapper">
              <img src={sliderLogo1} alt="" />
            </div>
            <div className="logo-wrapper">
              <img src={sliderLogo2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
