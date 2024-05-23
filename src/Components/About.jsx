import React from "react";
import glass from "../assets/mask.png";

const About = () => {
  return (
    <div className="py-5 lg:py-9 md:py-7" id="about">
      <div className="flex lg:flex-row flex-col-reverse justify-items-stretch">
        <div className="bg-bgcolor-one px-12 py-12 flex-1">
          <div className="flex flex-col gap-6">
            <h3 className="tex-heading-text font-bold text-[38px] leading-[48px]">
              Experience clear vision with <br /> OptiChroma Vision Frames
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-body-text text-base leading-[30px]">
                At OptiChroma, we believe that everyone deserves clear vision
                <br />
                and stylish eyewear. That's why we've designed a collection of
                <br />
                frames that prioritize both form and function.
              </p>
              <p className="text-body-text text-base leading-[30px]">
                Our team of experts is dedicated to helping you find the perfect
                <br />
                pair of glasses.
              </p>
            </div>
            <div>
              <button className="bg-heading-text px-10 py-3 rounded-md text-white-text text-lg font-bold">
                About Us
              </button>
            </div>
          </div>
        </div>
        <div
          className=" lg:flex-1 bg-cover lg:h-auto md:h-96 h-96 "
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${glass})`,
            backgroundPosition: "20%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
