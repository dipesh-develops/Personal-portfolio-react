import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../Testimonials/Testimonials";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Dipesh</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} to="Navbar" smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experiene</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to="Testimonial" smooth={true}>
              <li>Testmonials</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
