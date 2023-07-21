import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import chevyIcon from "../../assets/chevyIcon.png";
import chevyIconText from "../../assets/chevyIconText.png";
import chevyVideoBg from '../../assets/Studio_Project_V3.mp4'

import "../Pages-Components/chevy-corvette/style/style-chevy-corvette.css";

import Wave from "../components/wave";
import ContactUs from "../components/our-contact";
import Navbar from "../components/navbar";
import History from "../Pages-Components/chevy-corvette/history";
import Technology from "../Pages-Components/chevy-corvette/technology";
import Production from "../Pages-Components/chevy-corvette/production";

const Splash = () => {
  const navigate = useNavigate();

  const [splashHide, setSplashHide] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => setSplashHide("hide"), 3000); // 2 second timeout
    return () => clearTimeout(timeoutId); // clear the timeout when the component unmounts
  }, []);

  return (
    <>
      <div className={`${splashHide} splashScreen bg-black`}>
        <div>
          <img src={chevyIcon} className="splashIcon"></img>
          <img src={chevyIconText} className="splashIconText"></img>
          {/* <h1 className="font-extrabold text-2xl">Chevrolet</h1> */}
        </div>
      </div>
      <video src={chevyVideoBg} autoPlay loop muted className="foto-slider opacity-50" />
      <Wave />
      <ContactUs />
      <Navbar />
      {/* Next Button */}
      <div className="tombolNext">
        <button
          className="text-black opacity-80 border-0 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:3xl mx-auto px-2 py-1"
          onClick={() => navigate("/impala-sport")}
        >
          <span className="text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl text-black opacity-80 mx-auto">
            NEXT
          </span>
          &raquo;
        </button>
      </div>
      {/* Previous Button */}
      <div className="tombolPrevious">
        <button
          className="text-black opacity-80 border-0 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:3xl mx-auto px-2 py-1"
          onClick={() => navigate("/nova-coupe")}
        >
          &laquo;
          <span className="text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl text-black opacity-80 mx-auto">
            PREVIOUS
          </span>
        </button>
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

export default Splash;
