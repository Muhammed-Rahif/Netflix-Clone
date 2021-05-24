import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="row footer">
      <div className="footer-shade-top"></div>
      <div className="footer-content">
        <img
          className="footer-netflix-logo"
          src="./images/netflix-logo.png"
          alt="Netflix Clone React made by Rahif"
        />
        <p>
          Netflix Clone React made by <a href="https://muhammed-rahif.github.io" target="_blank">Muhammed Rahif</a>
        </p>
        <p className="footer-copyright">
            Copyrights @ Muhammed Rahif { new Date().getFullYear() }
        </p>
        <div className="footer-social-logos">
          <a href="https://github.com/Muhammed-Rahif" target="_blank"><i class="fab fa-github"></i></a>
          <a href="https://muhammed-rahif.github.io" target="_blank"><i class="fas fa-user-circle"></i></a>
          <a href="https://www.instagram.com/_.raifu.op_/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="mailto:rahifpalliyalil@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
