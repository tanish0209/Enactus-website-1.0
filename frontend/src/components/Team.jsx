import React from "react";
import { assets } from "../assets/assets";

const Team = () => {
  return (
    <div>
      <div className="bg-yellow-200">
        <div className="text-5xl p-20 font-bold text-center">OUR TEAM</div>

        <div className="grid grid-cols-1 p-5 md:grid-cols-5">
          <div className="flex flex-col items-center pt-10 pb-10 text-gray-700 hover:bg-gray-600 hover:text-white rounded-4xl transition-all duration-400">
            <img
              className="w-60 rounded-full"
              src={assets.TanishBajaj}
              alt=""
            />
            <div className="text-3xl m-2 font-extrabold">TANISH BAJAJ</div>

            <div className="text-2xl m-2 font-semibold">PRESIDENT</div>
          </div>
          <div className="flex flex-col items-center pt-10 pb-10 text-gray-700 hover:bg-gray-600 hover:text-white rounded-4xl transition-all duration-400">
            <img
              className="w-60 rounded-full"
              src={assets.KrishMutreja}
              alt=""
            />
            <div className="text-3xl m-2 font-extrabold">KRISH MUTREJA</div>

            <div className="text-2xl m-2 font-semibold">VICE-PRESIDENT</div>
          </div>
          <div className="flex flex-col items-center text-gray-700 pt-10 pb-10 hover:bg-gray-600 hover:text-white rounded-4xl transition-all duration-400">
            <img className="w-60 rounded-full" src={assets.ShellyGarg} alt="" />
            <div className="text-3xl m-2 font-extrabold">SHELLY GARG</div>

            <div className="text-2xl m-2 font-semibold">GENERAL SECRETARY</div>
          </div>
          <div className="flex flex-col items-center text-gray-700 pt-10 pb-10 hover:bg-gray-600 hover:text-white rounded-4xl transition-all duration-400">
            <img
              className="w-60 rounded-full"
              src={assets.AonushaSaigal}
              alt=""
            />
            <div className="text-3xl m-0 md:m-1 mt-2 mb-2` font-extrabold">
              AONUSHA SAIGAL
            </div>

            <div className="text-2xl m-2 mt-2.5 font-semibold">
              JOINT SECRETARY
            </div>
          </div>
          <div className="flex flex-col items-center text-gray-700 pt-10 pb-10 hover:bg-gray-600 hover:text-white rounded-4xl transition-all duration-400">
            <img
              className="w-60 rounded-full"
              src={assets.KshitizGaur}
              alt=""
            />
            <div className="text-3xl m-2 font-extrabold">KSHITIZ GAUR</div>

            <div className="text-2xl m-2 font-semibold">TREASURER</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
