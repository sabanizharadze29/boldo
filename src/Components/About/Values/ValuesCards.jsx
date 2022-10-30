import React from "react";
import valuesImg1 from "../../../assets/valuesImg1.png";
import valuesImg2 from "../../../assets/valuesImg2.png";
import valuesImg3 from "../../../assets/valuesImg3.png";
const valuesCardData = [
  {
    imgSrc: valuesImg1,
    title: "We are commited.",
    text: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
  },
  {
    imgSrc: valuesImg2,
    title: "We are responsible.",
    text: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
  },
  {
    imgSrc: valuesImg3,
    title: "We aim for progress.",
    text: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
  },
];
const ValuesCards = () => {
  return (
    <>
      {valuesCardData.map((card, i) => {
        const { imgSrc, title, text } = card;
        return (
          <div key={i} className="values-card">
            <img src={imgSrc} alt="" />
            <div className="values-card-body">
              <h1 className="values-card-title">{title}</h1>
              <p className="values-card-text">{text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ValuesCards;
