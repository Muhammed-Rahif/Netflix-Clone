import React, { useEffect, useState } from "react";
import "./VideoCards.css";
import $ from "jquery";
import { baseImgUrl } from "../../configs/urls";
import axios from "../../configs/axios";
import BackdropCard from "../BackdropCard/BackdropCard";

var page = 1;
function VideoCards({
  cardsArray,
  title = "Loading..",
  getNewCardsUrl,
  type = "movie",
}) {
  const [cards, setCards] = useState();
  const [backdropCardId, setBackdropCardId] = useState();

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

  useEffect(() => {
    setCards(cardsArray);
  }, [cardsArray]);

  var getNewCards = () => {
    page++;
    axios.get(getNewCardsUrl + page).then((response) => {
      let data = response.data.results;
      setCards((cards) => [...cards, ...data]);
    });
  };

  return (
    <div className="video-cards-wrapper">
      <div className="video-cards-title-wrapper">
        <h2>{title}</h2>
      </div>
      {backdropCardId && (
        <BackdropCard
          id={backdropCardId}
          type={type}
          closeFunction={setBackdropCardId}
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
                    // updateYtVideoId(itm.id);
                    setBackdropCardId(itm.id);
                  }}
                  key={key}
                >
                  <div className="dark-shade-top"></div>
                  <img
                    src={`${baseImgUrl + itm.poster_path}`}
                    alt={itm.title || itm.name}
                  />
                  <i className="far fa-play-circle video-cards-play-button fa-3x text-white"></i>
                  <div className="video-card-text-wrapper">
                    <h4 className="text-white">{itm.title || itm.name}</h4>
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
