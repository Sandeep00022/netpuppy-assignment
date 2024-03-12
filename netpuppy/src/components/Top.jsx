import React from "react";
import { Button } from "flowbite-react";
import { FaArrowRightLong } from "react-icons/fa6";
import image1 from "../assets/topImages/image1.png";
import image2 from "../assets/topImages/image2.png";
import image3 from "../assets/topImages/image3.png";
import knowmore from "../assets/topImages/knowmore.png";
const Top = () => {
  return (
    <>
      <div className="pt-9 pb-0 pr-9 pl-9 flex flex-col sm:flex-row border border-blue-600">
        <div className="border border-red-500 flex-1">
          <div className="">
            <h3 className="text-2xl font-bold italic">
              Our commitment to all-round development shines in diverse
              extracurricular activities.
            </h3>
            <p className="text-[#65bfbd] text-xl font-semibold">
              (Our Student love that!)
            </p>
          </div>
          <div className="p-1 pt-9 relative">
            <img
              className="block filter brightness-50 
            hover:brightness-100 w-full h-auto 
            transition-opacity duration-300
            rounded-xl
            "
              src={image1}
              alt=""
              // style={{ filter: "brightness(40%)" }}
            />

            <div className="absolute bottom-10 ml-5">
              <h3 className="text-xl font-bold text-white">Swimming</h3>
              <p className="text-white">22 Acres, pollution-Free,</p>
              <p className="text-white">World-Class</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center border border-red-600 flex-1">
          <div className="border flex ml-4 items-center justify-center border-red-600 hidden sm:block">
            <img
              className="transition-transform transform 
          hover:cursor-pointer hover:rotate-180
          duration-500
          "
              src={knowmore}
              alt=""
            />
          </div>
          <div className="border border-blue-600 ">
            <div className="p-1 relative right-0 sm:right-6 mb-9">
              <img
                className="block filter brightness-50 
            hover:brightness-100 w-full h-auto 
            transition-opacity duration-300
            rounded-xl
            "
                src={image2}
                alt=""
                // style={{ filter: "brightness(40%)" }}
              />

              <div className="absolute bottom-10 ml-5">
                <h3 className="text-xl font-bold text-white">Swimming</h3>
                <p className="text-white">22 Acres, pollution-Free,</p>
                <p className="text-white">World-Class</p>
              </div>
            </div>
            <div className="p-1 relative self-bottom">
              <img
                className="block filter brightness-50 
            hover:brightness-100 w-full h-full 
            transition-opacity duration-300
            rounded-xl
            "
                src={image3}
                alt=""
                // style={{ filter: "brightness(40%)" }}
              />

              <div className="absolute bottom-10 ml-5">
                <h3 className="text-xl font-bold text-white">Swimming</h3>
                <p className="text-white">22 Acres, pollution-Free,</p>
                <p className="text-white">World-Class</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-9 pl-9 ">
        <div className="pl-4 border border-red-500">
          <Button
            className="rounded-3xl  border sm:w-auto border-yellow-400"
            color="white"
          >
            SEE ALL ACTIVITIES{" "}
            <FaArrowRightLong className="ml-4 text-yellow-400" />
          </Button>
          <Button className="rounded-3xl mt-2  sm:hidden w-full text-center bg-red-600 ">
            SEE MORE 
          </Button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Top;
