import React, { useEffect, useState } from "react";
import blog from "../assets/awards/blog.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import award1 from "../assets/awards/award1.png";
import award2 from "../assets/awards/award2.png";
import award3 from "../assets/awards/award3.png";
import knowmore from "../assets/topImages/knowmore.png";
import AnimatedNumber from "react-animated-numbers";
import { Button } from "flowbite-react";
const Awards = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(100);
  const [currentNumber1, setCurrentNumber1] = useState(20);
  const [currentNumber2, setCurrentNumber2] = useState(60);
  const [currentNumber3, setCurrentNumber3] = useState(15);
  const targetNumber = 100;
  const targetNumber1 = 20;
  const targetNumber2 = 60;
  const targetNumber3 = 15;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="relative">
        <img
          className="block filter brightness-50 
          hover:brightness-100 w-full h-auto 
          transition-opacity duration-300
          rounded-xl"
          src={blog}
          alt=""
          style={{ clipPath: "inset(100px 0 0 0)" }}
        />
        <div className="flex flex-col absolute mt-9 inset-0 justify-center items-center mb-4 items-end p-2">
          <h3 className="text-2xl mr-40 text-white font-semibold">
            DIVINE INTO OUR...
          </h3>
          <h2 className=" text-3xl font-bold text-white ml-20">VIRTUAL TOUR</h2>
        </div>
        <div
          className="absolute bottom-0 w-[90%]  p-6 m-auto left-0 right-0 flex 
           justify-center rounded-md bg-[#b90124] gap-3 -mb-40 sm:-mb-20 overflow:hidden"
        >
          <div className="text-center hidden sm:block text-white p-5 border-r border-white">
            <h2 className="text-3xl flex justify-center font-bold">
              {" "}
              {scrollY >= 2200 ? (
                <AnimatedNumber
                  number={currentNumber}
                  animateToNumber={`${targetNumber}`}
                  formatter={(val) => val.toFixed(0)}
                />
              ) : (
                currentNumber
              )}{" "}
              %
            </h2>
            <p className="text-xs">college Acceptance</p>
          </div>
          <div className="text-center text-white p-5 border-r border-white">
            <h2 className="text-3xl flex justify-center font-bold">
              {" "}
              {scrollY >= 2200 ? (
                <AnimatedNumber
                  number={currentNumber1}
                  animateToNumber={`${targetNumber1}`}
                  formatter={(val) => val.toFixed(0)}
                />
              ) : (
                currentNumber1
              )}{" "}
            </h2>
            <p className="text-xs">Years of Educational Excellence</p>
          </div>
          <div className="text-center text-white p-5 border-r border-white">
            <h2 className="text-3xl flex justify-center font-bold">
              {" "}
              {scrollY >= 2200 ? (
                <AnimatedNumber
                  number={currentNumber2}
                  animateToNumber={`${targetNumber2}`}
                  formatter={(val) => val.toFixed(0)}
                />
              ) : (
                currentNumber2
              )}{" "}
              %
            </h2>
            <p className="text-xs">STEM Program Participation</p>
          </div>
          <div className="text-center text-white p-5 ">
            <h2 className="text-3xl justify-center flex font-bold">
              {" "}
              {scrollY >= 2200 ? (
                <AnimatedNumber
                  number={currentNumber3}
                  animateToNumber={`${targetNumber3}`}
                  formatter={(val) => val.toFixed(0)}
                />
              ) : (
                currentNumber3
              )}{" "}
              +
            </h2>
            <p className="text-xs">Extracurricular Activities</p>
          </div>
        </div>
      </div>
      <div className="pt-9 pb-0 pr-9 mt-40 pl-9 flex flex-col sm:flex-row-reverse">
        <div className="flex-1">
          <div className="">
            <h3 className="text-2xl font-bold italic">
              Awards and achievements, gleaming in sight, Honor efforts and
              perseverance in flight.
            </h3>
            <p className="text-[#65bfbd] text-xl font-semibold">
              (Everybody Loves that)
            </p>
          </div>
          <div className="p-1 pt-9 relative">
            <img
              className="block filter brightness-50 
            hover:brightness-100 w-full h-auto 
            transition-opacity duration-300
            rounded-xl
            "
              src={award3}
              alt=""
              // style={{ filter: "brightness(40%)" }}
            />

            <div className="absolute bottom-10 ml-5">
              <h3 className="text-xl font-bold text-white">
                Best Residential School in{" "}
              </h3>
              <h3 className="text-xl font-bold text-white">
                Uttarakhand, India{" "}
              </h3>
            </div>
          </div>
          <Button
            className="rounded-3xl border hidden sm:block  mt-9 ml-9 border-yellow-400"
            color="white"
          >
            SEE ALL ACTIVITIES{" "}
            <FaArrowRightLong className="ml-4 text-yellow-400" />
          </Button>
        </div>
        <div className="flex flex-row-reverse items-center justify-center flex-1">
          <div className="flex ml-4 items-center justify-center hidden sm:block">
            <img
              className="transition-transform transform 
          hover:cursor-pointer hover:rotate-180
          duration-500
          "
              src={knowmore}
              alt=""
            />
          </div>
          <div className="">
            <div className="p-1 relative right-0 sm:right-6 mb-9">
              <img
                className="block filter brightness-50 
            hover:brightness-100 w-[900px] h-auto 
            transition-opacity duration-300
            rounded-xl
            "
                src={award1}
                alt=""
                // style={{ filter: "brightness(40%)" }}
              />

              <div className="absolute bottom-10 ml-5">
                <h3 className="text-xl font-bold text-white">
                  Top Boarding School in{" "}
                </h3>
                <h3 className="text-xl font-bold text-white">
                  Uttarakhand, India{" "}
                </h3>
              </div>
            </div>
            <div className="p-1 relative self-bottom">
              <img
                className="block filter brightness-50 
            hover:brightness-100 w-full h-full 
            transition-opacity duration-300
            rounded-xl
            "
                src={award2}
                alt=""
                // style={{ filter: "brightness(40%)" }}
              />

              <div className="absolute bottom-10 ml-5">
                <h3 className="text-xl font-bold text-white">
                  International School Award,{" "}
                </h3>
                <h3 className="text-xl font-bold text-white">India 2019 </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-9 pl-9 ">
        <div className="pl-4">
          <Button
            className="rounded-3xl border block sm:hidden sm:w-auto border-yellow-400"
            color="white"
          >
            SEE ALL ACTIVITIES{" "}
            <FaArrowRightLong className="ml-4 text-yellow-400" />
          </Button>
          <Button className="rounded-3xl mt-2  sm:hidden w-full text-center bg-red-600 ">
            SEE MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Awards;
