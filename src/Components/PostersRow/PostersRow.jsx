import React, { useEffect, useState } from "react";
import "./PostersRow.css";
import "./PlayButton.css";
import YouTube from "react-youtube";
import lozad from "lozad";
import axios from "../../configs/axios";
import { baseThumbImgUrl } from "../../configs/urls";

function PostersRow({ postersTitle, postersList }) {
  // const [playButton, setPlayButton] = useState(true);
  const [ytVideoId, setYtVideoId] = useState();

  useEffect(() => {
    const observer = lozad();
    observer.observe();
  });

  var handlePlayButtonClick = (id) => {
    // setPlayButton(!playButton);
    axios
      .get(
        `movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          console.log(response.data.results[0]);
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

  var prevItm;
  return (
    <React.Fragment>
      <div className="posters-title">
        <h3>{postersTitle}</h3>
      </div>
      <div className="small-device">
        {postersList.length > 0 &&
          postersList.map((itm, indx) => {
            if ((indx + 1) % 2 === 0) {
              return (
                <div className="posters-wrapper" key={indx}>
                  <div
                    onClick={() => {
                      handlePlayButtonClick(itm.id);
                    }}
                    className="poster-card"
                  >
                    <div className="dark-fade-top"></div>
                    <img
                      className="img lozad"
                      data-src={baseThumbImgUrl + itm.poster_path}
                      style={{ backgroundColor: "#222222e6" }}
                      alt={itm.title}
                    />
                    <div className="play-button-wrapper">
                      {/* <button
                          onClick={() => {
                            handlePlayButtonClick(itm.id);
                          }}
                        >
                          <i className="fab fa-youtube"></i>
                        </button> */}
                    </div>
                    <div className="poster-text-wrapper">
                      <h5 className="poster-title">{prevItm.title}</h5>
                      <p className="poster-subtitle">
                        {prevItm.overview.substring(0, 90) + "..."}
                      </p>
                    </div>
                    <div className="dark-fade-bottom"></div>
                  </div>
                  <div
                    onClick={() => {
                      handlePlayButtonClick(prevItm.id);
                    }}
                    className="poster-card"
                  >
                    <div className="dark-fade-top"></div>
                    <img
                      className="img lozad"
                      data-src={baseThumbImgUrl + prevItm.poster_path}
                      style={{ backgroundColor: "#222222e6" }}
                      alt={itm.title}
                    />
                    <div className="play-button-wrapper">
                      {/* <button
                          onClick={() => {
                            handlePlayButtonClick(itm.id);
                          }}
                        >
                          <i className="fab fa-youtube"></i>
                        </button> */}
                    </div>
                    <div className="poster-text-wrapper">
                      <h5 className="poster-title">{itm.title}</h5>
                      <p className="poster-subtitle">
                        {itm.overview.substring(0, 90) + "..."}
                      </p>
                    </div>
                    <div className="dark-fade-bottom"></div>
                  </div>
                </div>
              );
            } else {
              prevItm = itm;
              return null;
            }
          })}
      </div>
      <div className="posters-wrapper large-device">
        {postersList.length > 0 &&
          postersList.map((itm, indx) => {
            return (
              <div
                onClick={() => {
                  handlePlayButtonClick(itm.id);
                }}
                className="poster-card"
                key={indx}
              >
                <div className="dark-fade-top"></div>
                <img
                  className="img lozad"
                  data-src={baseThumbImgUrl + itm.poster_path}
                  style={{ background: "#222222e6" }}
                  alt={itm.title}
                />
                <div className="play-button-wrapper">
                  {/* <button
                      onClick={() => {
                        handlePlayButtonClick(itm.id);
                      }}
                    >
                      <i className="fab fa-youtube"></i>
                    </button> */}
                </div>
                <div className="poster-text-wrapper">
                  <h5 className="poster-title">{itm.title}</h5>
                  <p className="poster-subtitle">
                    {itm.overview.substring(0, 75) + "..."}
                  </p>
                </div>
                <div className="dark-fade-bottom"></div>
              </div>
            );
          })}
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

export default PostersRow;
