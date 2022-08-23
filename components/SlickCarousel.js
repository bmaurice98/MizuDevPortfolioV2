import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import Image from "next/image";

const SlickCarousel = ({ tracks }) => {
  const [imageIndex, setImageIndex] = useState(0);

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
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className=" w-full p-6 justify-center">
      <Slider {...settings}>
        {tracks?.map((track, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <div className="flex justify-center">
              <Image
                src={`${track.album.images[0].url}`}
                layout="intrinsic"
                width={200}
                height={200}
                alt={track.name + track.artists[0].name}
              />
            </div>
            <div className="flex flex-col justify-center align-middle -translate-y-20">
              <p className="text-center text-2xl text-gray-100">{track.name}</p>
              <p className="text-center text-gray-200">
                {track.artists[0].name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
