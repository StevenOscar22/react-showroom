import React from 'react';

import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Hamburger = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState("")

  return (
    <div className="hamburger" onClick={() => setOpen(!open)}>
      <i className={`material-symbols-outlined right-[1rem] top-[1rem] fixed cursor-pointer`}>{`${open ? 'menu_open' : 'menu'}`}</i>
      <div className="dropdown-menu shadow-lg shadow-gray-600/75 rounded-lg backdrop-blur-sm">
        <ul className={`transition-all duration-[.5s] ease-in-expo ${open ? 'h-[190px]' : 'h-0'}`}>
          <li><Link to="cars" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">Cars</Link></li>
          <li><Link to="history" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">History</Link></li>
          <li><Link to="technology" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">Technology</Link></li>
          <li><Link to="production" spy={true} smooth={true} offset={-50} duration={500} className="navbar-button text-xs sm:text-xs lg:text-sm">Production</Link></li>

          {/* Contact Us Navigation */}
          <li className="dropdown-contactUs"><button className="text-sm sm:text-xs lg:text-sm bg-cyan-950 py-1 rounded-md text-slate-300 font-medium cursor-pointer" onClick={() => navigate('../pages/Contact.jsx')}>contact us</button></li>
        </ul>
      </div>
    </div>
  );
};
export default Hamburger;
