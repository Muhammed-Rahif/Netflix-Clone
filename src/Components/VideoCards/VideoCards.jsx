import React, { useEffect, useState } from "react";
import "./VideoCards.css";
import YouTube from "react-youtube";
import $ from "jquery";
import { baseImgUrl } from "../../configs/urls";
import axios from "../../configs/axios";

var page = 1;
function VideoCards({ cardsArray, title = "Loading..", getNewCardsUrl }) {
  const [cards, setCards] = useState();
  const [ytVideoId, setYtVideoId] = useState();

  useEffect(() => {
    $(window).scroll(function () {
      if (
        (($(window).scrollTop() + $(window).height()) / $(document).height()) *
          100 >
        89
      ) {
        getNewCards();
      }
    });
  }, []);

  var updateYtVideoId = (id) => {
    axios
      .get(
        `movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        if (response.data.results.length !== 0) {
          let movieData = response.data.results[0];
          setYtVideoId(movieData.key);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          alert("Sorry, No related videos found in YouTube..!");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Sorry, No related videos found in YouTube..!");
      });
  };

  var getNewCards = () => {
    page++;
    axios.get(getNewCardsUrl + page).then((response) => {
      let data = response.data.results;
      console.log(data);
      setCards((cards) => [...cards, ...data]);
    });
  };

  useEffect(() => {
    if (cardsArray.length !== 0) {
      axios
        .get(
          `movie/${cardsArray[[Math.floor((Math.random() * cardsArray.length))]].id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        .then((response) => {
          if (response.data.results.length !== 0) {
            let movieData = response.data.results[0];
            setYtVideoId(movieData.key);
          }
        });
    }
    setCards(cardsArray);
  }, [cardsArray]);

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
      <div className="video-card-row">
        {cards &&
          cards.map((itm, key) => {
            if (itm.poster_path) {
              return (
                <div
                  className="video-card"
                  onClick={() => {
                    updateYtVideoId(itm.id);
                  }}
                  key={key}
                >
                  <div className="dark-shade-top"></div>
                  <img
                    src={`${baseImgUrl + itm.poster_path}`}
                    alt={itm.title}
                  />
                  <i className="far fa-play-circle video-cards-play-button fa-3x text-white"></i>
                  <div className="video-card-text-wrapper">
                    <h4 className="text-white">{itm.title}</h4>
                    <p className="text-white">
                      {itm.overview.substring(0, 120) + "..."}
                    </p>
                  </div>
                  <div className="dark-shade-bottom"></div>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  );
}

export default VideoCards;
