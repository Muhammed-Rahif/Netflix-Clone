import React from "react";
import "./PostersRow-Secondary.css";
import $ from "jquery";

function PostersRow(props) {

  return (
    <div className="posters-wrapper">
      <div className="posters-title">
        <h3>Popular on Netflix</h3>
      </div>
      <div className="posters row">
        <div className="poster-card">
          <div className="dark-fade-top"></div>
          <img
            className="poster-image"
            src="./images/backend/money-heast-card.jpg"
            alt="Poster Card"
          />
          <div className="poster-text-wrapper">
            <h5 className="poster-title">Money Heast</h5>
            <p className="poster-subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="dark-fade-bottom"></div>
        </div>


        <div className="poster-card">
          <div className="dark-fade-top"></div>
          <img
            className="poster-image"
            src="./images/backend/kong-godzilla-card.jpg"
            alt="Poster Card"
          />
          <div className="poster-text-wrapper">
            <h5 className="poster-title">Kong vs Godzilla</h5>
            <p className="poster-subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="dark-fade-bottom"></div>
        </div>
        <div className="poster-card">
          <div className="dark-fade-top"></div>
          <img
            className="poster-image"
            src="./images/backend/tom-jerry-card.jpg"
            alt="Poster Card"
          />
          <div className="poster-text-wrapper">
            <h5 className="poster-title">Tom and Jerry</h5>
            <p className="poster-subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="dark-fade-bottom"></div>
        </div>
        <div className="poster-card">
          <div className="dark-fade-top"></div>
          <img
            className="poster-image"
            src="./images/backend/the-croods-card.jpg"
            alt="Poster Card"
          />
          <div className="poster-text-wrapper">
            <h5 className="poster-title">The Croods : A New Age </h5>
            <p className="poster-subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="dark-fade-bottom"></div>
        </div>
        <div className="poster-card">
          <div className="dark-fade-top"></div>
          <img
            className="poster-image"
            src="./images/backend/soul-card.jpg"
            alt="Poster Card"
          />
          <div className="poster-text-wrapper">
            <h5 className="poster-title">Soul</h5>
            <p className="poster-subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="dark-fade-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default PostersRow;
