import React, { useEffect, useState } from "react";
import "./BackdropCard.css";
import YouTube from "react-youtube";
import axios from "../../configs/axios";
import { baseImgUrl } from "../../configs/urls";

function BackdropCard({ id = "", type = "movie", closeFunction }) {
  const [ytVideoId, setYtVideoId] = useState();
  const [details, setDetails] = useState();
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    axios
      .get(`${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => {
        setDetails(response.data);
        setBadges(response.data.genres);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [type, id]);

  useEffect(() => {
    axios
      .get(
        `${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
  }, [id]);

  return (
    <div className="backdrop-card-wrapper">
      <div className="dark-shade-top"></div>
      <div
        className="inner-backdrop-card"
        style={{
          backgroundImage: `url(${baseImgUrl}${
            details ? details.backdrop_path : ""
          })`,
        }}
      >
        <div className="backdrop-card-content">
          <div className="mb-4 d-flex align-items-center justify-content-between">
            <button
              className="btn btn-close bg-secondary"
              onClick={() => {
                closeFunction(null);
              }}
            ></button>
            <button
              className="btn play-button mr-1"
              onClick={() => {
                document.querySelector(".backdrop-card-wrapper").scrollBy({
                  top: window.innerHeight,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <i className="fas fa-play"></i> Play
            </button>
            <button className="btn btn-secondary ">
              <i className="fas fa-plus"></i> Add to Playlist
            </button>
          </div>
          <div className="d-flex align-items-center">
            <h5>
              Release Date :{" "}
              {details
                ? details.release_date || details.first_air_date
                : "Loading.."}{" "}
              |
            </h5>
            <h5>
              Rating : {details ? details.vote_average : "Loading.."}/10
            </h5>
          </div>
          <div>
            {badges.map((itm, key) => {
              return <span className="badge bg-secondary mr-1" key={key}>{itm.name}</span>;
            })}
          </div>
          <h2 className="text-white">
            {details ? details.original_title || details.name : "Loading.."}
          </h2>
          <p className="mobile-device">{details ? details.overview : "Loading.."}</p>
        </div>
        {ytVideoId && (
          <YouTube
            videoId={ytVideoId}
            className="backdrop-card-youtube"
            opts={{ playerVars: { autoplay: 1 } }}
          />
        )}
      </div>
      <div className="left-side-shade"></div>
      <div className="dark-shade-bottom"></div>
    </div>
  );
}

export default BackdropCard;
