import React from "react";
import logo from "../assets/EyeGlass.png";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/Instagram.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="flex flex-col lg:px-14 md:px-12 px-7 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 md:justify-items-end sm:grid-cols-1 lg:justify-items-center sm:justify-items-start pb-10 ">
        <div className="flex flex-col gap-y-5">
          <div>
            <img src={logo} className="h-[37px]" />
          </div>
          <p className=" text-heading-text text-base font-normal leading-7">
            Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampde
          </p>
          <div className="flex justify-start gap-2">
            <a href="#">
              <img src={linkedin} />
            </a>
            <a href="#">
              <img src={instagram} />
            </a>
            <a href="#">
              <img src={twitter} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-xl font-bold pt-2">Support</p>
          <div className="flex flex-col gap-y-3 text-heading-text text-base">
            <a href="#">
              <p className="text-base">Privacy Policy</p>
            </a>
            <a href="#">
              <p className="text-base">Terms & Conditions</p>
            </a>
            <a href="#">
              <p className="text-base">Product FAQs</p>
            </a>
            <a href="#">
              <p className="text-base">Product FAQs</p>
            </a>
            <a href="#">
              <p className="text-base">Manage Account</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 md:justify-self-start">
          <p className="text-xl font-bold pt-2">Quick Links</p>
          <div className="flex flex-col gap-y-3 text-heading-text text-base">
            <a href="#">
              <p className="text-base">About Us</p>
            </a>
            <a href="#">
              <p className="text-base">Blog Post</p>
            </a>
            <a href="#">
              <p className="text-base">Product Features</p>
            </a>
            <a href="#">
              <p className="text-base">Company Info</p>
            </a>
            <a href="#">
              <p className="text-base">Company Info</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-xl font-bold pt-2">Communnity</p>
          <div className="flex flex-col gap-y-3 text-heading-text text-base">
            <a href="#">
              <p className="text-base">Become an affiliate</p>
            </a>
            <a href="#">
              <p className="text-base">Help Center</p>
            </a>
            <a href="#">
              <p className="text-base">Product FAQs</p>
            </a>
            <a href="#">
              <p className="text-base">Our Fourms</p>
            </a>
            <a href="#">
              <p className="text-base">Product API</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 border-t border-bgcolor-one py-5">
        <p>Copyright © 2023 All rights reserved by Eyeglass</p>
        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-5">
          <p>Privacy Policy</p>
          <p>Terms of service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
