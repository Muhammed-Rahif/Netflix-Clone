import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="row footer">
      <div className="footer-shade-top"></div>
      <div className="footer-content">
        <img
          className="footer-netflix-logo"
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
          alt="Netflix Clone React made by Rahif"
        />
        <p>
          Netflix Clone React made by <a href="https://muhammed-rahif.github.io" rel="noreferrer" target="_blank">Muhammed Rahif</a>
        </p>
        <p className="footer-copyright">
            Copyrights @ Muhammed Rahif { new Date().getFullYear() }
        </p>
        <div className="footer-social-logos">
          <a href="https://github.com/Muhammed-Rahif" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://muhammed-rahif.github.io" rel="noreferrer" target="_blank"><i className="fas fa-user-circle"></i></a>
          <a href="https://www.instagram.com/_.raifu.op_/" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="mailto:rahifpalliyalil@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
