import React from "react";
import Slider from "react-slick";

import image from "../assets/simage.png";
import image1 from "../assets/Image1.png";
import image2 from "../assets/Image.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../App.css";

const slides = [
  {
    id: 1,
    image: image,
    headline: "Personalized Eyeglass Shopping",
    button: "Buy Now",
  },
  {
    id: 2,
    image: image1,
    headline: "Bravo sunglass Shopping",
    button: "Buy Now",
  },
  {
    id: 3,
    image: image2,
    headline: "John Jacobs Shopping",
    button: "Buy Now",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slide = () => {
  return (
    <div className="hero-slider flex justify-items-center ">
      <div className="container mx-auto">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="grid md:grid-cols-2 grid-cols-1 content-center px-12">
                <div className=" flex self-center justify-center">
                  <div className="hero-content">
                    <h2 className="relative font-bold text-heading-text lh-65 w-200p fs-52">
                      {slide.headline}
                    </h2>
                    <button className="bg-heading-text text-white-text py-4 px-7 rounded-md font-bold mt-4">
                      {slide.button}
                    </button>
                  </div>
                </div>
                <div className="mt-5">
                  <img
                    className="w-fit"
                    src={slide.image}
                    alt={slide.headline}
                  />
                </div>
                <div className=""></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
