import React from "react";
import "./PostersRow.css";

function PostersRow2({ postersTitle, postersList }) {
  var prevItm;
  return (
    <React.Fragment>
      <div className="posters-title">
        <h3>{postersTitle}</h3>
      </div>
      {window.innerWidth < 650 ? (
        <React.Fragment>
          {postersList.map((itm, indx) => {
            if ((indx+1) % 2 === 0) {
              return (
                <div className="posters-wrapper" key={indx}>
                  <div className="poster-card">
                    <div className="dark-fade-top"></div>
                    <img
                      className="img"
                      src={prevItm.imgSrc}
                      alt="Poster Card"
                    />
                    <div className="poster-text-wrapper">
                      <h5 className="poster-title">{prevItm.title}</h5>
                      <p className="poster-subtitle">{prevItm.subtitle}</p>
                    </div>
                    <div className="dark-fade-bottom"></div>
                  </div>
                  <div className="poster-card">
                    <div className="dark-fade-top"></div>
                    <img className="img" src={itm.imgSrc} alt="Poster Card" />
                    <div className="poster-text-wrapper">
                      <h5 className="poster-title">{itm.title}</h5>
                      <p className="poster-subtitle">{itm.subtitle}</p>
                    </div>
                    <div className="dark-fade-bottom"></div>
                  </div>
                </div>
              );
            } else {
              prevItm = itm;
            }
          })}
        </React.Fragment>
      ) : (
        <div className="posters-wrapper">
          {postersList.map((itm) => {
            return (
              <div className="poster-card">
                <div className="dark-fade-top"></div>
                <img className="img" src={itm.imgSrc} alt="Poster Card" />
                <div className="poster-text-wrapper">
                  <h5 className="poster-title">{itm.title}</h5>
                  <p className="poster-subtitle">{itm.subtitle}</p>
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

export default PostersRow2;
