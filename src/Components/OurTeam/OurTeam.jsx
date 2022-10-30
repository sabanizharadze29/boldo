import React from "react";
import "./ourteam.css";
import teamImg from "../../assets/teamImg1.png";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <div className="container-fluid team">
      <div className="container team-container">
        <div className="team-title">
          <p className="our-team">Our team</p>
          <h1 className="secondary-font team-leadership">
            The leadership team
          </h1>
          <p className="team-text">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </p>
        </div>
        <div className="team-card-wrapper">
          <TeamCard />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
