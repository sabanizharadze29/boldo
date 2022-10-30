import React from "react";
import "./aboutgallery.css";
import AboutGallery1 from "../../../assets/aboutgallery1.png";
import AboutGallery2 from "../../../assets/aboutgallery2.png";
import AboutGallery3 from "../../../assets/aboutgallery3.png";
import AboutGallery4 from "../../../assets/aboutgallery4.png";
import AboutGallery5 from "../../../assets/aboutgallery5.png";
const AboutGallery = () => {
  return (
    <div className="container-fluid">
      <div className="container about-gallery-container">
        <img className="about-gallery1" src={AboutGallery1} alt="" />
        <img className="about-gallery2" src={AboutGallery2} alt="" />
        <img className="about-gallery3" src={AboutGallery3} alt="" />
        <img className="about-gallery4" src={AboutGallery4} alt="" />
        <img className="about-gallery5" src={AboutGallery5} alt="" />
      </div>
    </div>
  );
};

export default AboutGallery;
