import React from "react";
import { assets } from "../assets/assets";

const Projects = () => {
  return (
    <div className="bg-yellow-200">
      <div className="text-5xl p-15 font-bold text-center">OUR PROJECTS</div>

      <div className="grid grid-cols-1 p-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-gray-700 hover:bg-gray-600 hover:text-white rounded-4xl transition-all duration-400">
          <div className="text-3xl m-3 font-bold">PROJECT DHARTI</div>
          <img className="w-60 rounded-full" src={assets.DhartiLogo} alt="" />
          <div>
            <p className=" text-xl font-medium p-3">
              Project Dharti offers eco-friendly alternatives to plastic like
              terracotta products and cloth bags,pouches creatively enhanced
              with screen-printing techniques.
              <br />
              These products are designed to be durable, functional, and
              aesthetically pleasing, making them ideal for everyday use.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-gray-700 hover:bg-gray-600 hover:text-white rounded-4xl transition-all duration-400">
          <div className="text-3xl m-3 font-bold">PROJECT AAVARNAN</div>
          <img className="w-60 rounded-full" src={assets.AavarnanLogo} alt="" />
          <div>
            <p className=" text-xl font-medium p-3">
              Project Aavarnan aims to develop, manufacture, and promote a
              diverse range of recycled products that promote sustainability and
              address pressing environmental challenges.
              <br />
              Our commitment is to reduce waste, conserve natural resources, and
              encourage responsible consumption by offering high-quality
              products made from recycled materials.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-gray-700 hover:bg-gray-600 hover:text-white rounded-4xl transition-all duration-400">
          <div className="text-3xl m-3 font-bold">PROJECT NIRAMAYA</div>
          <img className="w-60 rounded-full" src={assets.NiramayaLogo} alt="" />
          <div>
            <p className=" text-xl font-medium p-3">
              Project Niramaya is dedicated to improving menstrual hygiene
              management and sanitation among women and girls in underprivileged
              communities.
              <br /> The project follows a strategic approach, beginning with
              surveys to assess community needs and identify suitable locations.
              It then moves to the procurement and installation of user-friendly
              vending machines, with trained staff ensuring their maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
