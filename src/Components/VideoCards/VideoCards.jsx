import React, { useEffect, useState } from "react";
import "./VideoCards.css";
import YouTube from "react-youtube";
import { baseImgUrl } from "../../configs/urls";
import axios from "../../configs/axios";

function VideoCards({ cardsArray, title = "" }) {
  const [cards, setCards] = useState();
  const [ytVideoId, setYtVideoId] = useState();

  useEffect(() => {
    if (cardsArray.length !== 0) {
      axios
        .get(
          `movie/${cardsArray[0].id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        .then((response) => {
          console.log(response.data);
          if (response.data.results.length !== 0) {
            console.log(response.data.results[0]);
            let movieData = response.data.results[0];
            setYtVideoId(movieData.key);
          }
        });
    }

    let arrangedCardsArray = new Array(Math.ceil(cardsArray.length / 3))
      .fill()
      .map((_) => cardsArray.splice(0, 3));
    setCards(arrangedCardsArray);
  }, [cardsArray]);

  var updateYtVideoId = (id) => {
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
        alert("Sorry, No related videos found in YouTube..!");
      });
  };

  return (
    <div className="video-cards-wrapper">
      <div className="video-cards-title-wrapper">
        <h2>{title}</h2>
      </div>
      {ytVideoId && (
        <YouTube
          videoId={ytVideoId}
          opts={{ playerVars: { autoplay: 1 } }}
          className="youtube-video"
        />
      )}
      {cards &&
        cards.map((itm, indx) => {
          if (window.innerWidth > 767) {
            return (
              <div className="video-card-row">
                {itm.map((itm) => {
                  return (
                    <div
                      className="video-card"
                      onClick={() => {
                        updateYtVideoId(itm.id);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <img
                        src={`${baseImgUrl + itm.backdrop_path}`}
                        alt="Something"
                      />
                      <h4 className="text-white">{itm.title}</h4>
                      <p className="text-white">
                        {itm.overview.substring(0, 120) + "..."}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          } else {
            return itm.map((itm) => {
              return (
                <div className="video-card-row">
                  <div
                    className="video-card"
                    onClick={() => {
                      updateYtVideoId(itm.id);
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <img
                      src={`${baseImgUrl + itm.backdrop_path}`}
                      alt="Something"
                    />
                    <h4 className="text-white">{itm.title}</h4>
                    <p className="text-white">
                      {itm.overview.substring(0, 120) + "..."}
                    </p>
                  </div>
                </div>
              );
            });
          }
        })}
    </div>
  );
}

export default VideoCards;
