import React from "react";
import "./values.css";
import ValuesCards from "./ValuesCards";

const Values = () => {
  return (
    <div className="container-fluid values bg-dark-blue">
      <div className="container container-values">
        <div className="values-title">
          <p className="values-title-sm">Our values</p>
          <h1 className="values-title-lg secondary-font">
            Things in we believe
          </h1>
          <p className="values-title-text">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </p>
        </div>
        <div className="values-card-wrapper">
          <ValuesCards />
        </div>
      </div>
    </div>
  );
};

export default Values;
