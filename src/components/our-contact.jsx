import React from 'react';

import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

    return (
      <div>
        <div className="contact-us">
          <button className="text-xs sm:text-xs lg:text-sm py-1 px-2 outline outline-offset-2 outline-2 rounded-md border-gray-500" onClick={() => navigate('../pages/Contact.jsx')}>contact us</button>
        </div>
      </div>
    );
  }
  
  export default ContactUs;