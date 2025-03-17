// import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col text-white bg-gray-700 justify-center items-center text-center">
      <div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5">
        WHO ARE WE?
      </div>
      <div className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-8xl">
        Enactus is an international nonprofit organization for nearly 50 years,
        dedicated to inspiring students to improve the world through
        entrepreneurial action. It is the world’s largest experiential learning
        platform dedicated to creating a better world while developing the next
        generation of entrepreneurial leaders and social innovators.
        <br />
        <br />
        Enactus Bharati Vidyapeeth’s College of Engineering (BVCOE) is a
        student-led social entrepreneurship organization that aims to create
        sustainable solutions for social, economic, and environmental
        challenges.
        <br />
        <br />
        At Enactus BVCOE, the team works on socially-driven entrepreneurial
        ventures, collaborating with NGOs, local businesses, and government
        initiatives to drive positive change.
      </div>
      <div className="mt-6 sm:mt-8">
        <img
          className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
          src={assets.LogoEnactus}
          alt="Enactus Logo"
        />
      </div>
    </div>
  );
};

export default About;
