import React from "react";
import logo from "../../assets/Logo/Vector.png";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  return (
    <div className="flex justify-between pt-[20px] pr-[40px] pl-[40px]">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Link
          to="/"
          className="w-[60px] h-[60px] rounded-full border-2 flex justify-center items-center"
        >
          <RxCross2 size={30} color="black" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
