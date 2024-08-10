import React from "react";
import Navbar from "../Navbar/Navbar";
import HomePage from "./HomePage";
import QueryPage from "./QueryPage";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="space-y-20">
      <div>
        <Navbar />
      </div>
      <div className="w-full flex gap-60 flex-col">
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
