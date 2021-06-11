import React, { useState } from "react";
import axios from "../../configs/axios";
import YouTube from "react-youtube";
import "./HeaderBanner.css";

function HeaderBanner({ imageUrl, title, subtitle, id }) {
  const [ytVideoId, setYtVideoId] = useState();

  var handlePlayButtonClick = (id) => {
    axios
      .get(
        `movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        if (response.data.results.length !== 0) {
          let movieData = response.data.results[0];
          setYtVideoId(movieData.key);
        } else {
          alert("Sorry, No related videos found in YouTube..!");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

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
            <button
              className="btn play-button"
              onClick={() => {
                handlePlayButtonClick(id);
              }}
            >
              <i className="fas fa-play"></i> Play
            </button>
            <button className="btn btn-secondary">
              <i className="fas fa-plus"></i> Playlist
            </button>
          </div>
        </div>
        <div className="dark-shade-bottom"></div>
      </div>
      {ytVideoId && (
        <YouTube
          videoId={ytVideoId}
          opts={{ playerVars: { autoplay: 1 } }}
          className="youtube-video"
        />
      )}
    </React.Fragment>
  );
}

export default HeaderBanner;
