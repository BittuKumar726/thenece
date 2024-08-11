import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up interval to decrease the timer
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate("/"); // Redirect after 0 seconds
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="space-y-60">
      <div className="flex justify-center items-center flex-col space-y-8 pt-[4rem]">
        <IoIosCheckmarkCircle color="#2DA950" size={90} />

        <span className="text-[#2DA950] font-grace text-2xl lg:text-5xl">
          Success Submitted{" "}
        </span>

        <p className="font-manrope text-[56px] font-semibold text-center w-[598px]">
          Congratulations
        </p>

        <p className="text-[#727272] font-manrope text-2xl font-medium text-center w-[40rem]">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to you shortly with updates
        </p>
      </div>
      <div className="flex items-center justify-center gap-1 text-xl">
        <p className="text-[#727272] font-manrope">
          Redirecting you to Homepage in{" "}
        </p>{" "}
        <span className="font-semibold"> {seconds} Seconds</span>
      </div>
    </div>
  );
};

export default SuccessPage;
