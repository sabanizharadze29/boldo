import React from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";
import Autor1 from "../../../assets/testimonialsImg1.png";
import Autor2 from "../../../assets/testimonialsImg2.png";
import Autor3 from "../../../assets/testimonialsImg3.png";

const Testimonials = () => {
  return (
    <>
      <div className="container-fluid testimonials bg-dark-blue">
        <div className=" container testimonials-container ">
          <h1 className="secondary-font testimonials-title">
            An enterprise template to ramp up your company website
          </h1>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper container"
          >
            <SwiperSlide>
              <div className="testimonials-content">
                <h3>
                  “Buyer buzz partner network disruptive non-disclosure
                  agreement business”
                </h3>
                <div className="testimonials-footer">
                  <img src={Autor1} alt="author" />
                  <div className="testimonials-footer-body">
                    <h2 className="testimonials-name">Albus Dumbledore</h2>
                    <p className="testimonials-job">Manager @ Howarts</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-content">
                <h3>
                  “Learning curve infrastructure value proposition advisor
                  strategy user experience hypotheses investor.”
                </h3>
                <div className="testimonials-footer">
                  <img src={Autor2} alt="author" />
                  <div className="testimonials-footer-body">
                    <h2 className="testimonials-name">Severus Snape</h2>
                    <p className="testimonials-job">Manager @ Slytherin</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-content">
                <h3>
                  “Release facebook responsive web design business model canvas
                  seed money monetization.”
                </h3>
                <div className="testimonials-footer">
                  <img src={Autor3} alt="author" />
                  <div className="testimonials-footer-body">
                    <h2 className="testimonials-name">Harry Potter</h2>
                    <p className="testimonials-job">Team Leader @ Gryffindor</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-content">
                <h3>
                  “Buyer buzz partner network disruptive non-disclosure
                  agreement business”
                </h3>
                <div className="testimonials-footer">
                  <img src={Autor1} alt="author" />
                  <div className="testimonials-footer-body">
                    <h2 className="testimonials-name">Albus Dumbledore</h2>
                    <p className="testimonials-job">Manager @ Howarts</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonials-content">
                <h3>
                  “Buyer buzz partner network disruptive non-disclosure
                  agreement business”
                </h3>
                <div className="testimonials-footer">
                  <img src={Autor1} alt="author" />
                  <div className="testimonials-footer-body">
                    <h2 className="testimonials-name">Albus Dumbledore</h2>
                    <p className="testimonials-job">Manager @ Howarts</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
