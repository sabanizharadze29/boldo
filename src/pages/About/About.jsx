import React from "react";
import AboutGallery from "../../Components/About/AboutGallery/AboutGallery";
import AboutHeader from "../../Components/About/AboutHeader/AboutHeader";
import Members from "../../Components/About/Members/Members";
import Values from "../../Components/About/Values/Values";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import OurTeam from "../../Components/OurTeam/OurTeam";
import Story from "../../Components/Story/Story";
import "./about.css";
const AboutPage = () => {
  return (
    <>
      <AboutHeader />
      <AboutGallery />
      <Story />
      <Members />
      <OurTeam />
      <Values />
      <Contact />

      <div className="spacing-contact-footer"></div>
      <Footer />
      <div className="spacing-footer-end-about"></div>
    </>
  );
};

export default AboutPage;
