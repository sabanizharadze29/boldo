import React from "react";
import "./nav.css";
import LogoLight from "../../assets/LogoLight.png";
import LogoDark from "../../assets/LogoDark.png";
import { Link } from "react-router-dom";

const Nav = ({ theme }) => {
  console.log(theme);
  return (
    <nav className="navbar">
      <div
        className={`nav-logo ${
          theme === "dark" ? "nav-logo-dark" : "nav-logo-light"
        }`}
      >
        <img
          className="nav-logo-image"
          src={theme === "dark" ? LogoDark : LogoLight}
          alt="Boldo"
        />
        <h2 className="title-lg logo-title">Boldo</h2>
      </div>
      <ul
        className={`navbar-list ${
          theme === "dark" ? "navbar-list-dark" : "navbar-list-light"
        }`}
      >
        <Link to="/" className="navba-list-item">
          Product
        </Link>
        <Link to="/services" className="navba-list-item">
          Services
        </Link>
        <Link to="/about" className="navba-list-item">
          About
        </Link>
        <li>
          <button
            className={`login-button ${
              theme === "dark" ? "login-button-dark" : "login-button-light"
            }`}
          >
            Log In
          </button>
        </li>
      </ul>
    </nav>
  );
};
Nav.defaultProps = {
  theme: "light",
};
export default Nav;
