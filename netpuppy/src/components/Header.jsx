import React, { useState } from "react";

const Header = () => {
  return (
    <div className="p-9 bg-[#b90124]">
      <div className="flex justify-center  text-white font-semibold">
        <div className="flex gap-2 text-sm sm:text-md sm:gap-10 hover:cursor-pointer ">
          <h3> INQUIRE</h3>
          <h3>APPLY</h3>
          <h3 className=" mr-3 sm:mr-8">SUPPORT</h3>
        </div>
        <div className="h-[30px] text-sm sm:text-md bg-white font-thin">|</div>
        <div className="flex gap-2  text-sm sm:text-md sm:gap-10 hover:cursor-pointer ">
          <h3 className=" ml-3 sm:ml-8">PARENTS</h3>
          <h3>AKUMS</h3>
        </div>
      </div>

      <div className="flex flex-col font- justify-center mt-9 items-center">
        <h1 className="text-7xl text-white shadow-xl font-bold">
          MADE <span className="italic">at</span>
        </h1>
        <h1 className="text-7xl text-white shadow-xl font-bold">MADEIRA</h1>
      </div>
    </div>
  );
};

export default Header;
