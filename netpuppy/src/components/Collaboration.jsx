import React from "react";
import col1 from "../assets/collab/col1.png";
import col2 from "../assets/collab/col2.png";
import col3 from "../assets/collab/col3.png";
import col4 from "../assets/collab/col4.png";

import col11 from "../assets/collab/col11.png";
import col22 from "../assets/collab/col22.png";
import col33 from "../assets/collab/col33.png";
import col44 from "../assets/collab/col44.png";
import col55 from "../assets/collab/col55.png";

const Collaboration = () => {
  return (
    <div className="flex  items-center flex-col sm:flex-row justify-between text-wrap ">
      <div className="bg-[#b90124] p-3 relative rounded-r-full">
        <h3 className="absolute font-mirador text-white right-[-115px] text-3xl font-bold italic mb-3">
          COLLABO<span className="text-[#b90124]">RATIONS</span>
        </h3>
        <p className="mt-9 text-sm absolute right-[-118px]">12+ Collaborations </p>
        <p className="text-white mt-16">What stands out to us is the school's</p>
        <p className="text-white">emphasis on individualized attention. Our</p>
        <p className="text-white">child's teachers have been attentive</p>
      </div>
      <div className=" flex-1 p-7">
        <div className="flex justify-end items-center gap-2">
          <img className="h-14" src={col1} alt="" />
          <img className="h-14" src={col2} alt="" />
          <img className="h-14" src={col3} alt="" />
          <img className="h-14" src={col4} alt="" />
        </div>
        <div className="flex justify-end mt-4 gap-2">
          <img className="h-14" src={col11} alt="" />
          <img className="h-14" src={col22} alt="" />
          <img className="h-14" src={col33} alt="" />
          <img className="h-14" src={col44} alt="" />
          <img className="h-14" src={col55} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
