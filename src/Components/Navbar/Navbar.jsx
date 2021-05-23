import React, { useEffect } from "react";
import "./Navbar.css";
import $ from "jquery";

function Navbar(props) {
  useEffect(() => {
    //Jquery
    $(".search,.search-input").hover(
      () => {
        $(".search-input").css({ width: "18rem", padding: ".3rem" });
        $(".search-input").focus();
      },
      () => {
        if (window.innerWidth > "400" && !Boolean($(".search-input").val())) {
          $(".search-input").css({ width: "0rem", padding: "0rem" });
        }
      }
    );
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="./Images/netflix-logo.png" alt="" width="124" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/tv-shows"
              >
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movies">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/recents">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/my-list">
                My List
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-auto text-white d-flex align-items-center justify-content-center">
          <i className="fas fa-search fa-lg search"></i>
          <input
            type="text"
            className=" search-input"
            placeholder={"Movies, TV Shows..."}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
