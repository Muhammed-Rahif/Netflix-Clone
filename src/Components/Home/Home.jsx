import React, { useEffect, useState } from "react";
import axios from "../../configs/axios";
import { baseImgUrl } from "../../configs/urls";
// components
import Navbar from "../Navbar/Navbar";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import PostersRow from "../PostersRow/PostersRow";
import Footer from "../Footer/Footer";

// Lozad
import lozad from "lozad";

function Home(props) {
  const [trending, setTrending] = useState();
  const [popular, setPopular] = useState();
  const [action, setAction] = useState();
  const [comedy, setComedy] = useState();
  const [originals, setOriginals] = useState();
  const [horror, setHorror] = useState();
  const [romance, setRomance] = useState();
  const [family, setFamily] = useState();
  const [headerBanner, setHeaderBanner] = useState();

  useEffect(() => {
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();

    axios
      .get(
        `trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((response) => {
        let data = response.data.results;
        setHeaderBanner(data[Math.floor(Math.random() * data.length + 1)]);
        setTrending(data.slice(0, 8));
      });

    axios
      .get(
        `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((response) => {
        let data = response.data.results;
        setPopular(data.slice(0, 8));
      });

    axios
      .get(
        `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`
      )
      .then((response) => {
        let data = response.data.results;
        setAction(data.slice(0, 8));
      });

    axios
      .get(
        `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`
      )
      .then((response) => {
        let data = response.data.results;
        setOriginals(data.slice(0, 8));
      });

    axios
      .get(
        `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`
      )
      .then((response) => {
        let data = response.data.results;
        setComedy(data.slice(0, 8));
      });

    axios
      .get(
        `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`
      )
      .then((response) => {
        let data = response.data.results;
        setHorror(data.slice(0, 8));
      });

    axios
      .get(
        `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`
      )
      .then((response) => {
        let data = response.data.results;
        setRomance(data.slice(0, 8));
      });

    axios
      .get(
        `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`
      )
      .then((response) => {
        let data = response.data.results;
        setFamily(data.slice(0, 8));
      });
  }, []);

  return (
    <div className="row">
      <Navbar />
      <HeaderBanner
        title={headerBanner ? headerBanner.title : "Loading.."}
        subtitle={headerBanner ? headerBanner.overview : "Loading.."}
        imageUrl={headerBanner ? baseImgUrl + headerBanner.backdrop_path : ""}
      />
      <PostersRow
        postersTitle={trending ? "Trending on Netflix" : ""}
        postersList={trending ? trending : []}
      />
      <PostersRow
        postersTitle={popular ? "Popular on Netflix" : ""}
        postersList={popular ? popular : []}
      />
      <PostersRow
        postersTitle={originals ? "Orignials on Netflix" : ""}
        postersList={originals ? originals : []}
      />
      <PostersRow
        postersTitle={horror ? "Horror Films" : ""}
        postersList={horror ? horror : []}
      />
      <PostersRow
        postersTitle={romance ? "Romance Movies" : ""}
        postersList={romance ? romance : []}
      />
      <PostersRow
        postersTitle={comedy ? "Comedy Movies" : ""}
        postersList={comedy ? comedy : []}
      />
      <PostersRow
        postersTitle={action ? "Action Films" : ""}
        postersList={action ? action : []}
      />
      <PostersRow
        postersTitle={family ? "Family Entertainment" : ""}
        postersList={family ? family : []}
      />
      <Footer />
    </div>
  );
}

export default Home;
