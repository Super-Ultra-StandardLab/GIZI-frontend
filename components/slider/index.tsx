"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {[
        "/assets/about1.webp",
        "/assets/about2.webp",
        "/assets/about3.webp",
        "/assets/about4.webp",
      ].map((item, index) => (
        <div className="w-screen h-[90vh] overflow-hidden" key={index}>
          <img src={item} alt={`img-${index}`} className="w-[100%]" />
        </div>
      ))}
    </Slider>
  );
};

export default Slide;
