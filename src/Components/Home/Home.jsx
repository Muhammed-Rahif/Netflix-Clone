import React from "react";
// components
import Navbar from "../Navbar/Navbar";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import PostersRow from "../PostersRow/PostersRow";
import Footer from "../Footer/Footer";

function Home(props) {
  const TRENDING_POSTERS_DATA_FROM_SERVER = {
    postersTitle: "Trending on Netflix",
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

  const POPULAR_POSTERS_DATA_FROM_SERVER = {
    postersTitle: "Popular on Netflix",
    postersList: [
      {
        title: "Avatar",
        subtitle:
          "Avatar is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana,...",
        imgSrc: "./images/backend/avatar-card.jpg",
      },
      {
        title: "Thor",
        subtitle:
          "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount ...",
        imgSrc: "./images/backend/thor-card.jpg",
      },
      {
        title: "How To Train Your Dragon",
        subtitle:
          "Hiccup and Toothless are faced with the threat of Drago, a dragon trapper, bent on capturing and dominating over all dragons.",
        imgSrc: "./images/backend/train-your-dragon-card.jpg",
      },
      {
        title: "Captain America : Civil War",
        subtitle:
          "Captain America: Civil War is a 2016 American superhero film based on the Marvel Comics character Captain America, produced by Marvel Studios",
        imgSrc: "./images/backend/civil-war-card.jpg",
      },
      {
        title: "Ant Man",
        subtitle:
          "Ant-Man and the Wasp: Quantumania — Ant-Man is a 2015 American superhero film based on the Marvel Comics characters of the same ...",
        imgSrc: "./images/backend/ant-man-card.jpg",
      },
      {
        title: "Transformers: The Last Knight",
        subtitle:
          "Transformers: The Last Knight is a 2017 American science fiction action film based on the Transformers toy line. It is the fifth installment of the live-action ...",
        imgSrc: "./images/backend/transformers-card.jpg",
      },
    ],
  };

  const MALAYALAM_POSTERS_DATA_FROM_SERVER = {
    postersTitle: "Malayalam on Netflix",
    postersList: [
      {
        title: "The Priest",
        subtitle:
          "The Priest is a 2021 Indian Malayalam-language supernatural horror mystery film directed by debutant Jofin T. Chacko,which marks the first collaboration of ...",
        imgSrc: "./images/backend/priest-card.jpg",
      },
      {
        title: "The One",
        subtitle:
          "One is a 2021 Indian Malayalam-language political drama film directed by Santhosh Vishwanath and written by Bobby & Sanjay. The film stars Mammootty, ...",
        imgSrc: "./images/backend/one-card.jpg",
      },
      {
        title: "Irul",
        subtitle:
          "When a car breakdown forces a couple to seek shelter in a nearby home, conversations with the stranger inside soon suggest there's a killer among them.",
        imgSrc: "./images/backend/irul-card.jpg",
      },
      {
        title: "Nayattu",
        subtitle:
          "Nayattu is a 2021 Indian Malayalam-language social thriller tragedy film directed and co-produced by Martin Prakkat and written by Shahi Kabir.",
        imgSrc: "./images/backend/nayattu-card.jpg",
      },
      {
        title: "Maniyarayile Ashokan",
        subtitle:
          "Ashokan desperately wishes to get married as he is past the marriageable age. However, bad luck and a series of unfortunate circumstances threaten to make this a distant dream.",
        imgSrc: "./images/backend/maniyarayile-ashokan-card.jpg",
      },
      {
        title: "Drishyam 2",
        subtitle:
          "Georgekutty, a cinema hall owner, thrives in life but is a changed man. However, when his family gets entangled in a criminal investigation,...",
        imgSrc: "./images/backend/drishyam-2-card.jpg",
      },
    ],
  };

  return (
    <div className="row">
      <Navbar />
      <HeaderBanner />
      <PostersRow
        postersTitle={TRENDING_POSTERS_DATA_FROM_SERVER.postersTitle}
        postersList={TRENDING_POSTERS_DATA_FROM_SERVER.postersList}
      />
      <PostersRow
        postersTitle={POPULAR_POSTERS_DATA_FROM_SERVER.postersTitle}
        postersList={POPULAR_POSTERS_DATA_FROM_SERVER.postersList}
      />
      <PostersRow
        postersTitle={MALAYALAM_POSTERS_DATA_FROM_SERVER.postersTitle}
        postersList={MALAYALAM_POSTERS_DATA_FROM_SERVER.postersList}
      />
      <Footer/>
    </div>
  );
}

export default Home;
