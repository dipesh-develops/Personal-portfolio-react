import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import todo from "../../img/todo.png";
import project from "../../img/project.jpg";
import portfolio from "../../img/portfolio.png";
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={project} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={todo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portfolio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Portfolio;
