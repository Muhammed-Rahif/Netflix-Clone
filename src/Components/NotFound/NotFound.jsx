import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
// Components
import Navbar from "../Navbar/Navbar";

function NotFound(props) {
  return (
    <div className="row h-100">
      <Navbar />
      <div
        className="content"
        style={{
          backgroundImage: `url('./images/not-found.jpg')`,
        }}
      >
        <div className="dark-shade-top"></div>
        <h1 className="main-title-404 mb-4">Lost your way ?</h1>
        <h4>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </h4>
        <Link to="/">
          <button className="btn mt-3">Netflix Home</button>
        </Link>
        <div className="error-code mt-3">
          <h3>Error code 404 : Not Found</h3>
        </div>
        <div className="dark-shade-bottom"></div>
      </div>
    </div>
  );
}

export default NotFound;
