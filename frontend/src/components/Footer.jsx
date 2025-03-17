import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-700 flex flex-col md:flex-row justify-center md:justify-around items-center text-white p-6 text-center md:text-left">
      <div className="mb-4 md:mb-0">
        <img
          className="w-40 sm:w-60 md:w-80"
          src={assets.LogoEnactus}
          alt="Enactus Logo"
        />
      </div>
      <div>
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
          For any queries contact us at:
          <br />
          <span className="font-bold">enactusbvcoe@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
