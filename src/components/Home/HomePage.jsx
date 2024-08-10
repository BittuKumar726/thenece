import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomButton from "../../General/CustomButton";
import img from "../../assets/Homepage/image 32618.png";
import sparkImg from "../../assets/Homepage/spark.png";
import CarouselComponent from "./Carousel";
import { PiRocketLaunch, PiRocketLaunchFill } from "react-icons/pi";

const HomePage = () => {
  return (
    <div className="flex justify-center flex-col w-full space-y-20 items-center">
      <div className="flex justify-center flex-col w-full items-center">
        <p className="text-[#2DA950] font-grace text-3xl">Success stories</p>
        <div className="font-semibold font-manrope text-4xl w-[30%] text-center">
          Every success journey we've encountered.
        </div>
      </div>
      <div className="flex space-x-20 w-full relative">
        <div className="w-[60%] flex justify-center">
          <img src={img} alt="offer" className="rounded-[30px] h-[500px]" />
        </div>

        {/* Card Positioned Over Image */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-[142%] -translate-y-[18%]">
          <div className="w-[267.82px] bg-white h-[235px] rounded-[28.36px] shadow-lg p-8 flex flex-col items-start space-y-4">
            <div className="relative">
              <img
                src={sparkImg}
                alt=""
                className="w-[70px] h-[70px] rotate-[0.27deg] absolute top-[-100%] left-[60%] transform -translate-x-[120%]"
              />
              <span className="font-switzer text-[50px] font-bold leading-none text-black relative z-10">
                40%
              </span>
            </div>
            <p className="text-[#6B7280] text-base font-normal">
              Achieved reduction in project execution time by optimizing team
              availability.
            </p>
          </div>
        </div>

        <div className="absolute top-1/4 left-1/4 transform -translate-x-[-8%] -translate-y-[-84%]">
          <div className="flex flex-col gap-4 w-[278.82px] bg-[#002E18] h-[239px] rounded-[28.36px] border border-[#002E18] pt-[34px] pr-[35px] pb-[40px] pl-[36px]">
            <div className="flex gap-2">
              <p className="font-switzer text-[62.37px] font-medium leading-[76.05px] tracking-[-0.03em] text-left text-white mt-auto">
                $0.5
              </p>
              <p className="font-switzer text-[21.81px] font-medium text-left text-[#A6A3A0] mt-auto">
                MILLION
              </p>
            </div>
            <p className="text-[#CCCCCC]">
              Reduced client expenses by saving on hiring and employee costs.
            </p>
          </div>
        </div>

        <div className="absolute top-[62%] left-[9%] transform -translate-x-[-8%] -translate-y-[-84%]">
          <div className="flex items-center justify-center gap-4 w-[232.82px] bg-[#FFFFFF] h-[80px] rounded-[45px] shadow-lg border border-[#FFFFFF]">
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#DDEFE0] border border-[#DDEFE0]">
              <PiRocketLaunchFill color="#2DA950" filled size={30} />
            </div>
            <div className="flex flex-col">
              <span className="font-manrope text-[24px] font-bold leading-[32.78px] text-left">
                10 DAYS
              </span>
              <span className="font-manrope text-[16px] font-medium leading-[20.8px] text-left text-[#828282]">
                Staff Deployment
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start flex-col w-[40%] space-y-10">
          <div>
            <CarouselComponent />
          </div>
          <div>
            <CustomButton className="rounded-full border pt-4 pb-4 pr-7 pl-7 bg-[#1C1C1C] text-white">
              <p className="flex items-center gap-4">
                Explore More <FaArrowRightLong />
              </p>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
