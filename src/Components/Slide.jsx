import React from "react";
import Slider from "react-slick";
import { CiSearch } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import image from "../assets/simage.png";
import image1 from "../assets/Image.png";
import image2 from "../assets/Image3.png";

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
  autoplay: true,
  autoplaySpeed: 3000,
};

const Slide = () => {
  return (
    <div className="hero-slider flex justify-items-center ">
      <div className="container mx-auto ">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="bg-[#EAEAEA]">
              <div className="grid md:grid-cols-2 grid-cols-1 content-center px-12 relative">
                <div className=" flex self-center md:justify-center justify-start">
                  <div className="hero-content absolute  md:static">
                    <h2 className="relative font-bold text-heading-text lh-65 w-200p fs-52">
                      {slide.headline}
                    </h2>
                    <button className="bg-heading-text text-white-text py-4 md:px-7 px-5 rounded-md font-bold mt-4">
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
              </div>
            </div>
          ))}
        </Slider>
        <div className="px-11 h-auto lg:h-[100px] md:h-[110px]">
          <div className="md:absolute lg:bottom-[8px] md:bottom-[-33px] static">
            <div className="flex md:flex-row justify-center flex-col gap-5">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-bgcolor-one p-3 rounded-[100px] border inline-block md:mt-0 mt-5">
                  <CiSearch className="text-body-text text-2xl " />
                </div>
                <div className="flex flex-col items-center gap-2 ">
                  <p className="text-xl font-bold text-heading-text">
                    Serach your sunglass
                  </p>
                  <p className="text-body-text text-base font-normal">
                    Shop stylish eye wear now
                  </p>
                </div>
              </div>
              <div className="relative md:block hidden">
                <div className="w-14 inline-block border-t-2 border-dotted mt-7 "></div>
                <p className="bg-bgcolor-one p-1 border rounded-full inline-block absolute top-[23px] "></p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-bgcolor-one p-3 rounded-[100px] border inline-block">
                  <MdOutlineProductionQuantityLimits className="text-body-text text-2xl" />
                </div>
                <div className="flex flex-col items-center gap-2 ">
                  <p className="text-xl font-bold text-heading-text">
                    Select Sunglass
                  </p>
                  <p className="text-body-text text-base font-normal">
                    Share your style
                  </p>
                </div>
              </div>
              <div className="relative md:block hidden">
                <div className="w-14 inline-block border-t-2 border-dotted mt-7 "></div>
                <p className="bg-bgcolor-one p-1 border rounded-full inline-block absolute top-[23px] "></p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-bgcolor-one p-3 rounded-[100px] border inline-block">
                  <MdOutlinePayment className="text-body-text text-2xl" />
                </div>
                <div className="flex flex-col items-center gap-2 ">
                  <p className="text-xl font-bold text-heading-text">
                    Make Payment
                  </p>
                  <p className="text-body-text text-base font-normal">
                    Securely checkout now
                  </p>
                </div>
              </div>
              <div className="relative md:block hidden">
                <div className="w-14 inline-block border-t-2 border-dotted mt-7 "></div>
                <p className="bg-bgcolor-one p-1 border rounded-full inline-block absolute top-[23px] "></p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-bgcolor-one p-3 rounded-[100px] border inline-block">
                  <FaTruck className="text-body-text text-2xl" />
                </div>
                <div className="flex flex-col items-center gap-2 ">
                  <p className="text-xl font-bold text-heading-text">
                    Recieved Product
                  </p>
                  <p className="text-body-text text-base font-normal">
                    See the world clearly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
