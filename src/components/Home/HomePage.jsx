import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomButton from "../../General/CustomButton";
import img from "../../assets/Homepage/image 32618.png";
import sparkImg from "../../assets/Homepage/spark.png";
import CarouselComponent from "./Carousel";
import { PiRocketLaunchFill } from "react-icons/pi";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center space-y-10 lg:space-y-20 w-full">
      <div className="flex flex-col items-center w-full space-y-4">
        <p className="text-[#2DA950] font-grace text-xl lg:text-3xl">
          Success stories
        </p>
        <div className="font-semibold font-manrope text-2xl lg:text-4xl text-center w-full max-w-lg lg:max-w-2xl">
          Every success journey we've encountered.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full relative ">
        <div className="w-full lg:w-[60%] flex justify-center p-10">
          <img
            src={img}
            alt="offer"
            className="rounded-[30px] h-[300px] lg:h-[500px] w-full lg:w-auto"
          />
        </div>

        {/* Card Positioned Over Image */}
        <div className="absolute top-[30%] lg:top-1/4 left-[50%] lg:left-1/4 transform -translate-x-[112%] lg:-translate-x-[112%] lg:-translate-y-[10%] -translate-y-[62%]">
          <div className="w-[90%] lg:w-[267.82px] bg-white h-[150px] lg:h-[235px] rounded-[28.36px] shadow-lg p-4 lg:p-8 flex flex-col items-start space-y-2 lg:space-y-4">
            <div className="relative">
              <img
                src={sparkImg}
                alt=""
                className="w-[40px] lg:w-[70px] h-[40px] lg:h-[70px] rotate-[0.27deg] absolute top-[-80%] left-[60%] transform -translate-x-[120%]"
              />
              <span className="font-switzer text-[30px] lg:text-[50px] font-bold leading-none text-black relative z-10">
                40%
              </span>
            </div>
            <p className="text-[#6B7280] text-sm lg:text-base font-normal">
              Achieved reduction in project execution time by optimizing team
              availability.
            </p>
          </div>
        </div>

        <div className="absolute top-[60%] lg:top-1/4 left-[50%] lg:left-1/4 transform -translate-x-[-20%] lg:-translate-x-[-35%] -translate-y-[80%] lg:-translate-y-[-84%]">
          <div className="flex flex-col gap-2 lg:gap-4 w-[90%] lg:w-[278.82px] bg-[#002E18] h-[160px] lg:h-[239px] rounded-[28.36px] border border-[#002E18] pt-[20px] lg:pt-[34px] pr-[20px] lg:pr-[35px] pb-[20px] lg:pb-[40px] pl-[20px] lg:pl-[36px]">
            <div className="flex gap-2">
              <p className="font-switzer text-[35px] lg:text-[62.37px] font-medium leading-none lg:leading-[76.05px] tracking-[-0.03em] text-left text-white mt-auto">
                $0.5
              </p>
              <p className="font-switzer text-[12px] lg:text-[21.81px] font-medium text-left text-[#A6A3A0] mt-auto">
                MILLION
              </p>
            </div>
            <p className="text-[#CCCCCC] text-[13px] lg:text-base">
              Reduced client expenses by saving on hiring and employee costs.
            </p>
          </div>
        </div>

        <div className="absolute top-[40%] lg:top-[62%] left-[8%] lg:left-[9%] transform -translate-x-[32%] lg:-translate-x-[-31%] -translate-y-[-50%] lg:-translate-y-[-84%]">
          <div className="flex items-center justify-center gap-2 lg:gap-4 w-[115%] lg:w-[232.82px] bg-[#FFFFFF] h-[60px] lg:h-[80px] rounded-[45px] shadow-lg border border-[#FFFFFF]">
            <div className="flex justify-center items-center w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] rounded-full bg-[#DDEFE0] border border-[#DDEFE0]">
              <PiRocketLaunchFill color="#2DA950" filled size={25} />
            </div>
            <div className="flex flex-col">
              <span className="font-manrope text-[20px] lg:text-[24px] font-bold leading-none lg:leading-[32.78px] text-left">
                10 DAYS
              </span>
              <span className="font-manrope text-[12px] lg:text-[16px] font-medium leading-none lg:leading-[20.8px] text-left text-[#828282]">
                Staff Deployment
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start flex-col w-full lg:w-[40%] space-y-10 lg:space-y-40">
          <div>
            <CarouselComponent />
          </div>
          <div className="flex justify-center lg:justify-start w-full">
            <CustomButton className="rounded-full border pt-2 lg:pt-4 pb-2 lg:pb-4 pr-5 lg:pr-7 pl-5 lg:pl-7 bg-[#1C1C1C] text-white hover:bg-[#4E4E4E]">
              <p className="flex items-center gap-2 lg:gap-4">
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
