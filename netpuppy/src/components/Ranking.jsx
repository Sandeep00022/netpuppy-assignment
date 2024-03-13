import React from "react";
import { LiaTrophySolid } from "react-icons/lia";
import rightarrow from "../assets/arrow-right.png";
const Ranking = () => {
  return (
    <div className="bg-[#f8f5f0] mt-10">
      <div className="p-9 flex flex-col sm:flex-row justify-center items-center gap-5">
        <div className="flex  flex-col shadow-4xl justify-center items-center p-10 border border-2 border-[#b90124] rounded-xl">
          <LiaTrophySolid className="text-[#b90124]" size={"80"} />
          <div>
            <h4 className="italic text-xl text-[#b90124] font-semibold">
              Our Rankings
            </h4>
            <p className="text-xs ">Top Boarding School</p>
          </div>
        </div>
        <img
           className="h-14 "
           src={rightarrow}
           alt=""
        />
        <div className="flex flex-1 flex-col sm:flex-row gap-8">
          <div className="bg-[#b90124] text-white flex flex-col rounded-md justify-center items-center p-10">
            <h2 className="font-miltonian text-4xl">#1</h2>
            <h4 className="text-lg italic font-semibold">In Dehradun</h4>
            <p className="text-sm">
              Co-Educational Boarding School in Dehradun by Education Today 2020
            </p>
          </div>
          <div className="bg-[#b90124] text-white flex flex-col rounded-md justify-center items-center p-10">
            <h2 className="font-miltonian text-4xl">#1</h2>
            <h4 className="text-lg italic font-semibold">In Dehradun</h4>
            <p className="text-sm">
              Co-Educational Boarding School in Dehradun by Education Today 2020
            </p>
          </div>
          <div className="bg-[#b90124] text-white flex flex-col rounded-md justify-center items-center p-10">
            <h2 className="font-miltonian text-4xl">#1</h2>
            <h4 className="text-lg italic font-semibold">In Dehradun</h4>
            <p className="text-sm">
              Co-Educational Boarding School in Dehradun by Education Today 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
