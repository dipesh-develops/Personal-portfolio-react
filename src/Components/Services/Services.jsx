import React from "react";
import "./Services.css";
import HeartEmojie from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card.jsx";
import resume from "./resume.pdf";
import devicon from "../../img/devicon.png";
import design from "../../img/design.png";
import ui from "../../img/ui-ux.png";
import { motion } from "framer-motion";

function Services() {
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="l-services">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, iusto
          <br />
          est facere optio ut aut nisi consequatur quae neque qui!
        </span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="r-services">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={design}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        {/* 2nd card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={devicon}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </motion.div>
        {/* 3rd card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={ui}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum, dolor sit amet consectetur am corrupti inventore. Id nisi atque voluptatibus iste, sint in explicabo."
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
