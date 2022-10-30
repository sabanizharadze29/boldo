import React from "react";
import "./members.css";
const Members = () => {
  return (
    <div className="container-fluid members">
      <div className="contact members-container">
        <div className="members-title">
          <p>Our numbers</p>
          <h1 className="text-center secondary-font members-title-lg">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="members-scores">
          <div className="member-score-title">
            <h1 className="members-score-number secondary-font">120m</h1>
            <p className="members-score-feauture">Cool feature title</p>
          </div>
          <div className="member-score-title">
            <h1 className="members-score-number secondary-font">10.000</h1>
            <p className="members-score-feauture">Cool feature title</p>
          </div>
          <div className="member-score-title">
            <h1 className="members-score-number secondary-font">240</h1>
            <p className="members-score-feauture">Cool feature title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
