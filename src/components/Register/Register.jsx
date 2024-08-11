import React, { useState } from "react";
import Header from "../Navbar/Header";
import CustomButton from "../../General/CustomButton";
import { IoIosInformationCircle } from "react-icons/io";
import SuccessPage from "./SuccessPage";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSave = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Enter a valid email address");
      setIsSubmitted(false);
      return;
    } else {
      setEmailError("");
      alert("Form submitted successfully!");
      setIsSubmitted(true);
    }
  };

  const isDisabled = !(fullName && email) ? true : false;

  return (
    <div className="space-y-20">
      <Header isSubmitted={isSubmitted} />

      {!isSubmitted ? (
        <>
          <div className="flex justify-center items-center flex-col space-y-8">
            <span className="text-[#2DA950] font-grace text-2xl lg:text-5xl">
              Registration Form
            </span>

            <p className="font-manrope text-[56px] font-semibold leading-[67.2px] text-center w-[598px] h-[134px]">
              Start your success Journey here!
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <form className="w-full max-w-lg" onSubmit={onSave}>
              <div className="mb-6">
                <input
                  value={fullName}
                  type="text"
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full h-[5rem] px-10 py-3 rounded-full bg-[#EFEFEF] text-gray-700 text-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#537FF1] focus:bg-[#F5F8FF]"
                />
              </div>
              <div className="mb-12">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(""); // Clear the error when user starts typing
                  }}
                  placeholder="Enter your email"
                  className="w-full h-[5rem] px-10 py-3 rounded-full bg-[#EFEFEF] text-gray-700 text-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#537FF1] focus:bg-[#F5F8FF]"
                />
                {emailError && (
                  <p className="text-red-500 text-xl mt-2 flex items-center">
                    <IoIosInformationCircle color="red" filled />
                    {emailError}
                  </p>
                )}
              </div>
              <CustomButton
                type="submit"
                className="w-full h-[5rem] px-3 py-3 text-xl rounded-full"
                style={{
                  cursor: isDisabled ? "no-drop" : "pointer",
                  backgroundColor: isDisabled ? "#C9C9C9" : "black",
                  color: "white",
                }}
                disabled={isDisabled ? true : false}
              >
                Submit
              </CustomButton>
            </form>
          </div>
        </>
      ) : (
        <SuccessPage />
      )}
    </div>
  );
};

export default Register;
