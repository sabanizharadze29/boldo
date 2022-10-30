import React from "react";
import "./homepage.css";
import "./homepage.css";
import Header from "../../Components/Hompage/header/Header";
import Services from "../../Components/Hompage/services/Services";
import Testimonials from "../../Components/Hompage/Testimonials/Testimonials";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Customer from "../../Components/Hompage/Customer/Customer";
import Blog from "../../Components/Hompage/Blog/Blog";

const Homepage = () => {
  return (
    <>
      <Header />
      <Services />
      <Testimonials />
      <div className="spacing-test-cust"></div>
      <Customer />
      <div className="spacing-cust-blog"></div>
      <Blog />
      <div className="spacing-blog-contact"></div>
      <Contact />
      <div className="spacing-contact-footer"></div>
      <Footer />
      <div className="spacing-footer"></div>
    </>
  );
};

export default Homepage;
