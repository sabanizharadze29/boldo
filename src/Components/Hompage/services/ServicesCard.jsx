import React from "react";
import CardIcon from "../../../assets/arrow-right.png";

import cardPicture1 from "../../../assets/cardPicture1.png";
import cardPicture2 from "../../../assets/cardPicture2.png";
import cardPicture3 from "../../../assets/cardPicture3.png";
const serviceCardData = [
  {
    imgSrc: cardPicture1,
    title: "Cool feature title",
    text: "Learning curve network effects return on investment",
  },
  {
    imgSrc: cardPicture2,
    title: "Even cooler feature",
    text: "Learning curve network effects return on investment",
  },
  {
    imgSrc: cardPicture3,
    title: "Cool feature title",
    text: "Learning curve network effects return on investment",
  },
];
const ServicesCard = () => {
  const serviceCardElements = serviceCardData.map((card, index) => {
    const { imgSrc, title, text } = card;

    return (
      <div key={index} className="service-card">
        <img src={imgSrc} alt="" />
        <h2 className="service-card-title">{title}</h2>
        <p className="service-card-text">{text}</p>
        <a className="service-card-link" href="#">
          Explore page <img src={CardIcon} alt="" />
        </a>
      </div>
    );
  });

  return <>{serviceCardElements}</>;
};

export default ServicesCard;
