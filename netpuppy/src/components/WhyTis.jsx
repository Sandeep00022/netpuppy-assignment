import React from "react";
import whytis from "../assets/whytis/whytis.jpg";
import { LuSchool } from "react-icons/lu";
import { GrUserExpert } from "react-icons/gr";
import { FaUsersGear } from "react-icons/fa6";

const WhyTis = () => {
  return (
    <div className="p-9">
      <div className="text-center">
        <h1 className="text-4xl font-bold italic">
          WHY <span className="text-[#b90124]">TIS?</span>
        </h1>
      </div>
      <div className="mt-8 flex  flex-col-reverse sm:flex-row">
        <div className="flex flex-col-reverse  sm:flex-row gap-6">
          <div className="flex-1 mt-20">
            <div className="flex flex-col mb-4 items-end p-2">
              <h3 className="text-xl mr-40 font-semibold">A FOCUS ON...</h3>
              <h2 className=" text-3xl font-bold text-[#b90124] ml-20">
                MANAGEMENT
              </h2>
            </div>
            <div>
              <p>
                <span>Extremely Friendly and Approachable Management.</span>
                <span>
                  Tula’s International School combines – respect for tradition
                  with a
                </span>
                <span>
                  progressive application of modern sciences, academic rigour
                  with
                </span>
                <span>
                  a caring heart, and individual appreciation with the warmth of
                  a
                </span>
                <span>school community</span>
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img className="rounded-xl shadow-2xl" src={whytis} alt="" />
          </div>
        </div>
        <div className="flex justify-center flex-row sm:flex-col sm:gap-9 gap-2 p-5">
          <div className=" flex flex-col items-center text-center">
            <LuSchool />
            <p className="text-xs"> CAMPUS</p>
          </div>
          <div className=" flex flex-col items-center text-center">
            <GrUserExpert />
            <p className="text-xs">EXPERT</p>
            <p className="text-xs">INSTRUCTION</p>
          </div>
          <div className=" flex flex-col items-center text-center">
            <FaUsersGear />
            <p className="text-xs">TRANING</p>
            <p className="text-xs">METHOD</p>
          </div>
          <div className=" flex flex-col items-center text-center">
            <FaUsersGear />
            <p className="text-xs">RATIO</p>
          </div>
          <div className=" flex flex-col bg-[#b90124] p-2 rounded-xl items-center text-center">
            <FaUsersGear />
            <p className="text-xs">MANAGEMENT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTis;
