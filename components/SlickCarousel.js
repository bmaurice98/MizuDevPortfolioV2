import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";

const SlickCarousel = (props) => {
  const { children, handleIndex } = props;
  const NextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="arrow next">
        <ArrowRightIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="arrow prev">
        <ArrowLeftIcon />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => handleIndex(next),
  };
  return (
    <div className=" w-full p-6 justify-center">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SlickCarousel;
