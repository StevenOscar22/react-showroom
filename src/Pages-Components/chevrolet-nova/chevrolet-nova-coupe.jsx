import React from 'react';

import { useNavigate } from "react-router-dom";
import '../chevrolet-nova/style/style-chevrolet-nova.css'

import Wave from "../../components/wave";
import ContactUs from "../../components/our-contact";
import Navbar from "../../components/navbar";
import History from "./history";
import Technology from "./technology";
import Production from "./production";

const Nova = () => {
  const navigate = useNavigate();


  return (
    <>
      <Wave />
      <ContactUs />
      <Navbar />
      {/* Next Button */}
      <div className="tombolNext">
        <button className="text-black opacity-80 border-0 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:3xl mx-auto px-2 py-1" onClick={() => navigate("/chevy-corvette")}><span className="text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl text-black opacity-80 mx-auto">NEXT</span>&raquo;</button>
      </div>
      {/* Previous Button */}
      <div className="tombolPrevious">
        <button className="text-black opacity-80 border-0 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:3xl mx-auto px-2 py-1" onClick={() => navigate("/impala-sport")}>&laquo;<span className="text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl text-black opacity-80 mx-auto">PREVIOUS</span></button>
      </div>
      {/* Cars Scroll Button */}
      <div className="cars"></div>
      {/* Cars Descriptions */}
      <div className="box">
        <History />
        <Technology />
        <Production />
      </div>
    </>
  );
};

export default Nova;
