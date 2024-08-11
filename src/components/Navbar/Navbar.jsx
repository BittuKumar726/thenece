import React, { useState, useEffect, useRef } from "react";
import CustomButton from "../../General/CustomButton";
import logo1 from "../../assets/Logo/Vector.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close the modal if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const getProjects = () => {
    console.log("getProjects");
    navigate("/register");
    closeMenu();
  };

  const getOnboarTalent = () => {
    console.log("getOnboarTalent");
    closeMenu();
  };

  return (
    <nav className="bg-white-500 border rounded-full border-gray-300 px-4 py-2 lg:px-6">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-8 w-auto" src={logo1} alt="Your Company" />
        </div>
        <div className="flex items-center gap-4">
          {/* Hamburger menu button for mobile */}
          <div className="sm:hidden relative mr-6">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-7 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {/* Modal for mobile menu */}
            {menuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-1 w-60 bg-white rounded-lg shadow-xl z-50 border"
              >
                <div className="flex flex-col gap-2 p-4">
                  <CustomButton
                    className="rounded-full border py-2 px-4 hover:bg-[#EAEAEA]"
                    onClick={getProjects}
                  >
                    Get Projects
                  </CustomButton>
                  <CustomButton
                    className="rounded-full border py-2 px-4 bg-[#1C1C1C] text-white hover:bg-[#4E4E4E]"
                    onClick={getOnboarTalent}
                  >
                    Onboard Talent
                  </CustomButton>
                </div>
              </div>
            )}
          </div>

          {/* Menu items for desktop */}
          <div className="gap-4 hidden sm:flex">
            <CustomButton
              className="rounded-full border py-2 px-4 md:py-3 md:px-6 hover:bg-[#EAEAEA]"
              onClick={getProjects}
            >
              Get Projects
            </CustomButton>
            <CustomButton
              className="rounded-full border py-2 px-4 md:py-3 md:px-6 bg-[#1C1C1C] text-white hover:bg-[#4E4E4E]"
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
