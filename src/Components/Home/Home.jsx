import React from "react";
// components
import Navbar from "../Navbar/Navbar";
import HeaderBanner from "../HeaderBanner/HeaderBanner";

function Home(props) {
  return (
    <React.Fragment>
      <Navbar />
      <HeaderBanner />
    </React.Fragment>
  );
}

export default Home;
