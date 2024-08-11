import React from "react";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] text-black p-[60px] border rounded-[40px] mt-8 flex justify-between items-center">
      <p className="flex items-center gap-2">
        <RiCopyrightLine />
        Talup 2023. All rights reserved
      </p>
      <div className="flex items-center gap-8">
        <a href="#" className="text-gray-700">
          Terms & Conditions
        </a>

        <a href="#" className="text-gray-700">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
