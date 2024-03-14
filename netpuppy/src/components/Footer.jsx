import React from "react";
import mapImage from "../assets/map.png";

const Footer = () => {
  return (
    <div className="mt-20 shadow-2xl">
      <div className="flex justify-center flex-col sm:flex-row p-5">
        <div className="flex flex-col mb-4 items-center p-2">
          <h3 className="text-xl mr-40 font-semibold">FIND YOUR</h3>
          <h2 className=" text-3xl font-bold text-[#b90124] ml-20">FOCUS</h2>
        </div>
        <div className="flex justify-center items-center gap-6 sm:gap-20">
          <div >
            <p>- FAQ</p>
            <p>- Calendar</p>
            <p>- E-Prospectus</p>
          </div>
          <div>
            <p>- Registration Form</p>
            <p>- Blogs</p>
            <p>- Privacy Policy</p>
          </div>
          <div>
            <p>- Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="relative  flex justify-center items-center">
        <img
          className="block filter brightness-50 
            hover:brightness-100 w-full h-auto 
            transition-opacity  duration-300"
          src={mapImage}
          alt=""
        />
        <div className="absolute  bottom-10 ml-5">
         <div className="hidden sm:block">
         <div className="flex flex-col mb-4 items-center p-2">
            <h3 className="text-xl mr-40 font-semibold">
              BECOME A PART OF THE...
            </h3>
            <h2 className=" text-3xl font-bold text-[#b90124] ml-20">
              TULA’S FAMILY
            </h2>
          </div>
          <p className="text-white text-xs">
            VILL.DHOOLKOT, NEAR TULAS INSTITUTE SELAQUI NEAR MANDIR Dehradun,
            Uttarakhand, 248197
          </p>
          <p className="text-center mt-3">
            (+91) 9458311000 <span className="ml-20">info@tis.edu.in</span>{" "}
          </p>
         </div>
          <div className="flex gap-8 flex-col sm:flex-row justify-center mt-20 sm:mt-4 items-center">
            <button className="p-3 hidden sm:block bg-[#b90124] text-white">
              VIRTUAL TOUR
            </button>
            <button className="p-3 hidden sm:block bg-[#b90124] text-white">APPLY NOW</button>
            <button className="p-3 bg-[#b90124] text-white">
              fedena LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
