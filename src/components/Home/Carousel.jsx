import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Slider {...settings}>
        <div>
          <p className="text-lg font-semibold">
            Enhance fortune 50 company’s insights teams research capabilities
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            Enhance fortune 50 company’s insights teams research capabilities
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            Enhance fortune 50 company’s insights teams research capabilities
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselComponent;
