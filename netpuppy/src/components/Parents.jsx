import React from "react";
import coma from "../assets/parents/coma.png";
import phone from "../assets/parents/phone.png";
import { BsYoutube } from "react-icons/bs";

const Parents = () => {
  return (
    <div className="p-9 flex flex-col sm:flex-row gap-7">
      <div className="flex-1 mt-20">
        <div className="p-10">
          <h2 className="text-4xl font-bold ">From The</h2>
          <h1 className="text-4xl italic font-bold font-mirador text-[#b90124]">
            Parents
          </h1>
          <p></p>
        </div>
        <div className="flex mt-[-50px] items-center">
          <img className="h-7" src={coma} alt="" />
          <div class="border-t mt-2 w-[60%] border-3 border-red-500"></div>
        </div>
        <div className="mt-7 mr-0 sm:mr-[150px]">
          <p>
            What stands out to us is the school's emphasis on individualized
            attention. Our child's teachers have been attentive to their unique
            needs, providing the support and encouragement necessary for their
            academic success.
          </p>
        </div>
      </div>
      <div>
        <div className="relative flex-1 p-4 bg-[#b90124] rounded-l-3xl flex justify-left">
          <div className="relative right-40">
            {" "}
            <img className="" width={"300px"} src={phone} alt="" />
          </div>
          <BsYoutube
            className="absolute  top-[200px] bottom-0 left-[-8px] "
            size="40"
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Parents;
