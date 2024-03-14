import React from "react";
import Top from "../components/Top";
import Youtube from "../components/Youtube";
import WhyTis from "../components/WhyTis";
import Awards from "../components/Awards";
import Ranking from "../components/Ranking";
import Parents from "../components/Parents";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="xl:w-[70%] m-auto">
      <Header/>
      <Top />
      <Youtube />
      <WhyTis />
      <Awards />
      <Ranking />
      <Parents />
      <Collaboration />
      <Footer />
    </div>
  );
};

export default Home;
