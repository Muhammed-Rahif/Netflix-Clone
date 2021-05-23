import React, { useEffect, useState } from "react";
import "./Navbar.css";
import $ from "jquery";

function Navbar(props) {
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    //Jquery
    if (window.innerWidth > 400) {
      $(".search,.search-input").hover(
        () => {
          $(".search-input").css({ width: "18rem", padding: ".3rem" });
          $(".search-input").focus();
        },
        () => {
          if (!Boolean($(".search-input").val())) {
            $(".search-input").css({ width: "0rem", padding: "0rem" });
          }
        }
      );
    } else {
      $(".search").click(() => {
        setOpenSearch((openSearch)=>!openSearch);
      });
    }
  }, []);
  
  useEffect(() => {
    if (openSearch) {
      $(".search-input").css({ width: "18rem", padding: ".3rem" });
    } else {
      $(".search-input").css({ width: "0rem", padding: "0rem" });
    }
  }, [openSearch]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="./images/netflix-logo.png" alt="Netflix" width="124" />
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
