import React from "react";
import girl from "../assets/youtubeImages/youtube.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "flowbite-react";
const Youtube = () => {
  return (
    <div className="mt-9">
      <iframe
        className="rounded-xl"
        width="100%"
        height="515"
        src="https://www.youtube.com/embed/XlH4R_oI8QY?si=dwAkYg6e5ssOIx_6&autoplay=1&showinfo=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="flex mt-9 gap-6 flex-col-reverse sm:flex-row m-auto w-[80%]">
        <div className="">
          <img className="" src={girl} alt="" />
        </div>
        <div className="flex-1 flex flex-col ">
          <h3 className="text-2xl text-[#b90124] italic font-bold">
            At Tula’s, we ask, “How can we make school better?”
          </h3>
          <p className="mt-2">
            Using the latest research on how girls learn best, we designed an
            innovative modular schedule, personalized for each student. Our
            girls are focused, not overwhelmed. “Girls Rule” isn’t just a saying
            here. Develop leadership skills, build compassion, gain
            responsibility, and prepare to change the world.
          </p>
         <div className=" flex justify-end">
         <Button
            className="rounded-3xl border relative sm:w-[50%] mt-7 right-0 border-yellow-400"
            color="white"
          >
            LEARN MORE{" "}
            <FaArrowRightLong className="ml-4 text-yellow-400" />
          </Button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;

//https://youtu.be/XlH4R_oI8QY?si=5i1UsaAGnvOchwrs
