import React from "react";
// components
import Navbar from "../Navbar/Navbar";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import PostersRow from "../PostersRow/PostersRow";

function Home(props) {
  return (
    <React.Fragment>
      <Navbar />
      <HeaderBanner />
      <PostersRow />
    </React.Fragment>
  );
}

export default Home;
