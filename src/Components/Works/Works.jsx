import React from "react";
import "./Works.css";

import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import datahub from "../../img/datahub.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";

function Works() {
  return (
    <div className="works">
      {/* left side */}
      <div className="l-services">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, iusto
          <br />
          est facere optio ut aut nisi consequatur quae neque qui!
          <br />
          est facere optio ut aut nisi consequatur quae nest facere optio
          <br />
          est facere optio ut aut nisi consequatur quae n
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={datahub} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* Background circles */}
        <div className="w-backcircle purpleCircle"></div>
        <div className="w-backcircle YellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
