import React from "react";
import CustomButton from "../../General/CustomButton";
import logo1 from "../../assets/Logo/Vector.png";
const Navbar = () => {
  const getProjects = () => {
    console.log("getProjects");
  };
  const getOnboarTalent = () => {
    console.log("getOnboarTalent");
  };
  return (
    <nav className="bg-white-500 border rounded-full border-gray-300 pt-[16.97px] pr-[20.89px] pb-[16.97px] pl-[52.22px]">
      <div className="mx-auto px-2 sm:px-6 lg:px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo1} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block"></div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-4">
            <CustomButton
              className="rounded-full border pt-4 pb-4 pr-7 pl-7 hover:bg-[#EAEAEA] "
              onClick={getProjects}
            >
              Get Projects
            </CustomButton>
            <CustomButton
              className="rounded-full border pt-4 pb-4 pr-7 pl-7 bg-[#1C1C1C] text-white hover:bg-[#4E4E4E]"
              onClick={getOnboarTalent}
            >
              Onboard Talent
            </CustomButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
