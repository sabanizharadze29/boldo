import React from "react";
import Nav from "../../nav/Nav";

import "./aboutheader.css";

const AboutHeader = () => {
  return (
    <div className="container-fluid bg-dark-blue about-header">
      <div className="container about-header-container ">
        <Nav theme={"light"} />
        <p className="about-header-title text-center">About</p>
        <h1 className="secondary-main about-header-text text-center">
          We love to make great things, things that matter.
        </h1>
        <p className="about-header-info text-center">
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
