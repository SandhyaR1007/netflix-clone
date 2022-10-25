import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";
import "./styles/HomeScreen.css";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* navbar */}
      <Nav />

      {/* banner */}
      <Banner />
      {/* rows */}
    </div>
  );
};

export default HomeScreen;
