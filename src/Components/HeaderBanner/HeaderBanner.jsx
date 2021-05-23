import React from "react";
import "./HeaderBanner.css";
import $ from "jquery";

function HeaderBanner(props) {
  return (
    <React.Fragment>
      <div
        className="header-banner"
        style={{
          backgroundImage: "url(../images/backend/The-Avengers-banner-1.jpg)",
        }}
      >
        <div className="dark-shade-top"></div>
        <div className="left-inner">
          <h1 className="main-title">Avengers: Infinity War</h1>
          {window.innerWidth > 767 ? (
            <h4 className="sub-title">
              As the Avengers and their allies have continued to protect the
              world from threats too large for any one hero to handle, a new
              danger has emerged from the cosmic shadows: Thanos. A despot of
              intergalactic infamy, his goal is to collect all six Infinity
              Stones, artifacts of unimaginable power, and use them to inflict
              his twisted will on all of reality. Everything the Avengers have
              fought for has led up to this moment - the fate of Earth and
              existence itself has never been more uncertain.
            </h4>
          ) : null}
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
