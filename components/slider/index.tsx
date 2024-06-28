"use client";

import React from "react";
import Slider from "react-slick";
import Arrow from "@/public/assets/down-arrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
    <div className="">
      <Image
        src={Arrow}
        alt="DOWN_ARROW"
        className="absolute z-50 top-[35vw] left-[48vw] w-[5vw] cursor-pointer"
        onClick={() =>
          window.scroll({ top: window.innerWidth * 0.49, behavior: "smooth" })
        }
      />
      <div className="w-full h-[45vw] bg-[#64646452] absolute z-40"></div>
      <Slider {...settings}>
        {[
          "/assets/about1.webp",
          "/assets/about2.webp",
          "/assets/about3.webp",
          "/assets/about4.webp",
        ].map((item, index) => (
          <div className="w-screen h-[45vw] bg-red-200" key={index}>
            <img src={item} alt={`img-${index}`} className="w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
