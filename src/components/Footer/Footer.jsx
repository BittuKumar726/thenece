import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] text-black p-[60px] border rounded-[40px] mt-8">
      <p>Talup 2023. All rights reserved</p>
      <div>
        <a href="#" className="text-gray-400">
          Terms & Conditions
        </a>
        <span> | </span>
        <a href="#" className="text-gray-400">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
