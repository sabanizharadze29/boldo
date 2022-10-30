import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact container-fluid">
      <div className="container bg-dark-blue ">
        <h1 className="secondary-font text-center contact-title-name">
          An enterprise template to ramp up your company website
        </h1>
        <form action="">
          <input
            className="contact-email"
            type="email"
            name="email"
            id=""
            placeholder="Your email address"
          />
          <button className="submit-button" type="submit">
            Start now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
