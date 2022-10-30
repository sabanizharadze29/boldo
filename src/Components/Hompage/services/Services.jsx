import React from "react";
import ServicesCard from "./ServicesCard";
import infoImg from "../../../assets/sectionImage1.png";
import infoImg2 from "../../../assets/sectionImage2.png";
import FeatherWhite from "../../../assets/star.png";
import Feather from "../../../assets/featherDark.png";
import Sun from "../../../assets/sun.png";
import SunWhite from "../../../assets/sunWhite.png";
import Eye from "../../../assets/eye.png";
import EyeWhite from "../../../assets/eyeWhite.png";
import "./services.css";
import { useState } from "react";
const Services = () => {
  const [isActive, setIsActive] = useState({
    firstButton: true,
  });

  function handleClick(event) {
    let checkElement = event.target.nodeName;
    let clickedElement = event.target;
    if (checkElement === "IMG") {
      return;
    }
    const clickedElementName = event.target.id;
    console.log(clickedElement);
    const elements = document.querySelectorAll(".customer-service-btn");
    let elementsArray = [...elements];

    elementsArray.map((element) => {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
        setIsActive((prev) => {
          return {};
        });
      }
    });
    clickedElement.classList.add("active");

    if (isActive[clickedElementName] === true) {
      setIsActive((prev) => {
        return { ...prev, [clickedElementName]: isActive[clickedElementName] };
      });
    } else {
      setIsActive((prev) => {
        return { ...prev, [clickedElementName]: !isActive[clickedElementName] };
      });
    }
  }
  return (
    <div className="services container-fluid">
      <section className="service-section container">
        <div className="services-title text-center">
          <p>Our Services</p>
          <h1 className="secondary-font ">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="service-body">
          <ServicesCard />
        </div>
        <div className="section-info">
          <img src={infoImg} alt="infoImg" />
          <div className="section-info-body">
            <h1 className="secondary-font">
              We connect our customers with the best, and help them keep up-and
              stay open
            </h1>
            <ul className="section-info-list">
              <li className="section-info-list-item">
                We connect our customers with the best
              </li>
              <li className="section-info-list-item">
                Advisor success customer launch party
              </li>
              <li className="section-info-list-item">
                Business-to-consumer long tail
              </li>
            </ul>
            <button className="section-info-button">Start now</button>
          </div>
        </div>
        <div className="section-costumer-service">
          <div className="costumer-service-body">
            <h1 className="secondary-font">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h1>
            <div onClick={handleClick} className="costumer-service-btns">
              <a id="firstButton" className="customer-service-btn active">
                <img
                  src={isActive.firstButton ? FeatherWhite : Feather}
                  alt=""
                />
                We connect our customers with the best.
              </a>
              <a
                onClick={handleClick}
                id="secondButton"
                className="customer-service-btn  "
              >
                <img src={isActive.secondButton ? EyeWhite : Eye} alt="" />
                Advisor success customer launch party.
              </a>
              <a
                onClick={handleClick}
                id="thirdButton"
                className="customer-service-btn  "
              >
                <img src={isActive.thirdButton ? SunWhite : Sun} alt="" />
                Business-to-consumer long tail.
              </a>
            </div>
          </div>
          <div className="customer-service-img">
            <img src={infoImg2} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
