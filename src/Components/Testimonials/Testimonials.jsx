import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilepic1 from "../../img/profile1.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import sushan from "../../img/sushan.jpg";
import jeevan from "../../img/jeevan.jpg";
import dip from "../../img/dip.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: sushan,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio quia a cupiditate officiis in veritatis rem numquam fugit omnis voluptate iure odio assumenda? Modi impedit magni laboriosam exercitationem dolorem!",
    },
    {
      img: jeevan,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio quia a cupiditate officiis in veritatis rem numquam fugit omnis voluptate iure odio assumenda? Modi impedit magni laboriosam exercitationem dolorem!",
    },
    {
      img: dip,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio quia a cupiditate officiis in veritatis rem numquam fugit omnis voluptate iure odio assumenda? Modi impedit magni laboriosam exercitationem dolorem!",
    },
    {
      img: profilepic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio quia a cupiditate officiis in veritatis rem numquam fugit omnis voluptate iure odio assumenda? Modi impedit magni laboriosam exercitationem dolorem!",
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide Key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Testimonial;
