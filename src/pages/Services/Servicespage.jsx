import React from "react";
import ServiceBlog from "../../Components/About/Services/Blog/ServiceBlog";
import LatestNews from "../../Components/About/Services/LatestNews/LatestNews";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/nav/Nav";
import "./servicespage.css";
const ServicesPage = () => {
  return (
    <>
      <div className="container-fluid service-nav">
        <div className="container service-nav-container ">
          <Nav theme={"dark"} />
        </div>
      </div>
      <ServiceBlog />
      <LatestNews />
      <Contact />

      <div className="spacing-contact-footer"></div>
      <Footer />
      <div className="spacing-footer-end-about"></div>
    </>
  );
};

export default ServicesPage;
