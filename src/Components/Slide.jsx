import React from "react";
import Slider from "react-slick";

import image from "../assets/Image1.png";

const slides = [
  {
    id: 1,
    image: image,
    headline: "Personalized Eyeglass Shopping",
    button: "Buy Now",
  },
  {
    id: 2,
    image: image,
    headline: "Personalized Eyeglass Shopping",
    button: "Buy Now",
  },
  {
    id: 3,
    image: image,
    headline: "Personalized Eyeglass Shopping",
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
  return <div>Slider</div>;
};

export default Slide;
