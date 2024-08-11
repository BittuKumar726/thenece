import React from "react";
import Navbar from "../Navbar/Navbar";
import HomePage from "./HomePage";
import QueryPage from "./QueryPage";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="space-y-10 lg:space-y-20">
      <div>
        <Navbar />
      </div>
      <div className="w-full flex flex-col gap-10 lg:gap-60">
        <HomePage />
        <QueryPage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
