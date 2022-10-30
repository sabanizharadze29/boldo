import React from "react";
import teamImg1 from "../../assets/teamImg1.png";
import teamImg2 from "../../assets/teamImg2.png";
import teamImg3 from "../../assets/teamImg3.png";
const teamCardData = [
  {
    imgSrc: teamImg1,
    name: "Michael Scott",
    job: "General Manager",
  },

  {
    imgSrc: teamImg2,
    name: "Dwight Schrute",
    job: "General Manager",
  },
  {
    imgSrc: teamImg3,
    name: "Pam Beetsley",
    job: "General Manager",
  },
];
const TeamCard = () => {
  return (
    <>
      {teamCardData.map((card, index) => {
        const { imgSrc, name, job } = card;
        return (
          <div key={index} className="team-card">
            <img src={imgSrc} alt="" />
            <h3 className="team-card-name secondary-font">{name}</h3>
            <p className="team-card-job">{job}</p>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;
