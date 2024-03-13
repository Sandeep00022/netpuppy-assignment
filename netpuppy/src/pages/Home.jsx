import React from "react";
import Top from "../components/Top";
import Youtube from "../components/Youtube";
import WhyTis from "../components/WhyTis";
import Awards from "../components/Awards";
import Ranking from "../components/Ranking";
import Parents from "../components/Parents";

const Home = () => {
  return (
    <div className="xl:w-[70%] m-auto">
      <Top />
      <Youtube />
      <WhyTis />
      <Awards />
      <Ranking />
      <Parents />
    </div>
  );
};

export default Home;
