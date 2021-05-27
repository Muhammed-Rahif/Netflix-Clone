import React, { useEffect, useState } from "react";
import PlayButton from "../PlayButton/PlayButton";
import "./PostersRow.css";

function PostersRow({ postersTitle, postersList }) {
  const [onMobile, setOnMobile] = useState(false);

  useEffect(() => {
    setOnMobile(Boolean(window.innerWidth < 767));
  }, []);

  var prevItm;
  return (
    <React.Fragment>
      <div className="posters-title">
        <h3>{postersTitle}</h3>
      </div>
      {onMobile ? (
        <React.Fragment>
          {postersList.map((itm, indx) => {
            if ((indx + 1) % 2 === 0) {
              return (
                <div className="posters-wrapper" key={indx}>
                  <div className="poster-card">
                    <div className="dark-fade-top"></div>
                    <img
                      className="img lozad"
                      data-src={prevItm.imgSrc}
                      style={{backgroundColor:"#222222e6"}}
                      alt="Poster Card"
                    />
                    <PlayButton />
                    <div className="poster-text-wrapper">
                      <h5 className="poster-title">{prevItm.title}</h5>
                      <p className="poster-subtitle">
                        {prevItm.subtitle.substring(0, 50) + "..."}
                      </p>
                    </div>
                    <div className="dark-fade-bottom"></div>
                  </div>
                  <div className="poster-card">
                    <div className="dark-fade-top"></div>
                    <img
                      className="img lozad"
                      data-src={itm.imgSrc}
                      style={{backgroundColor:"#222222e6"}}
                      alt="Poster Card"
                    />
                    <PlayButton />
                    <div className="poster-text-wrapper">
                      <h5 className="poster-title">{itm.title}</h5>
                      <p className="poster-subtitle">
                        {itm.subtitle.substring(0, 50) + "..."}
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
        </React.Fragment>
      ) : (
        <div className="posters-wrapper">
          {postersList.map((itm, indx) => {
            return (
              <div className="poster-card" key={indx}>
                <div className="dark-fade-top"></div>
                <img
                  className="img lozad"
                  data-src={itm.imgSrc}
                  style={{background:"#222222e6"}}
                  alt="Poster Card"
                />
                <PlayButton />
                <div className="poster-text-wrapper">
                  <h5 className="poster-title">{itm.title}</h5>
                  <p className="poster-subtitle">
                    {itm.subtitle.substring(0, 75) + "..."}
                  </p>
                </div>
                <div className="dark-fade-bottom"></div>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
}

export default PostersRow;
