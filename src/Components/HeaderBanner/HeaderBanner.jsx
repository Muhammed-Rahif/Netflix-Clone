import React from "react";
import "./HeaderBanner.css";

function HeaderBanner({ imageUrl, title, subtitle }) {
  return (
    <React.Fragment>
      <div
        className="header-banner lozad"
        style={{
          backgroundColor: "#222222e6",
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="dark-shade-top"></div>
        <div className="left-inner">
          <h1 className="main-title">{title}</h1>
          <h4 className="sub-title">{subtitle}</h4>
          <div className="buttons-section">
            <button className="btn play-button">
              <i className="fas fa-play"></i> Play
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-plus"></i> My Playlist
            </button>
          </div>
        </div>
        <div className="dark-shade-bottom"></div>
      </div>
    </React.Fragment>
  );
}

export default HeaderBanner;
