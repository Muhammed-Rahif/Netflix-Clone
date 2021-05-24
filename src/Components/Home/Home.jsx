import React from "react";
// components
import Navbar from "../Navbar/Navbar";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import PostersRow from "../PostersRow/PostersRow";

function Home(props) {
  const TRENDING_POSTERS_DATA_FROM_SERVER = {
    postersTitle: "Trending on Netflx",
    postersList: [
      {
        title: "Spider Man",
        subtitle:
          "The Vulture is an alias used by several fictional supervillains appearing in American comic books published by Marvel Comics.",
        imgSrc: "./images/backend/spider-man-1-card.jpg",
      },
      {
        title: "Stranger Things",
        subtitle:
          "Stranger Things is an American science-fiction horror television created by the Duffer Brothers and streaming on Netflix.",
        imgSrc: "./images/backend/stranger-things-card.jpg",
      },
      {
        title: "Jurassic World",
        subtitle:
          "A theme park showcasing genetically-engineered dinosaurs turns into a nightmare for its tourists when one of the dinosaurs escapes its enclosure.",
        imgSrc: "./images/backend/jurassic-world-card.jpg",
      },
      {
        title: "Game of Thrones",
        subtitle:
          "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO.",
        imgSrc: "./images/backend/game-of-thrones-card.jpg",
      },
      {
        title: "Black Panther",
        subtitle:
          "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name.",
        imgSrc: "./images/backend/black-panther-card.jpg",
      },
      {
        title: "Spider Man",
        subtitle:
          "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
        imgSrc: "./images/backend/spider-man-card.jpg",
      },
    ],
  };


  return (
    <React.Fragment>
      <Navbar />
      <HeaderBanner />
      <PostersRow
        postersTitle={TRENDING_POSTERS_DATA_FROM_SERVER.postersTitle}
        postersList={TRENDING_POSTERS_DATA_FROM_SERVER.postersList}
      />
    </React.Fragment>
  );
}

export default Home;
