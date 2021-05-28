import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import VideoCards from "../VideoCards/VideoCards";
import axios from "../../configs/axios";

function All(props) {
  const [all, setAll] = useState();

  useEffect(() => {
    axios
      .get(`movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((response) => {
        let data = response.data.results;
        setAll(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <VideoCards title={all ? "Upcoming Movies" : "Loading.."} cardsArray={all ? all : []} />
    </React.Fragment>
  );
}

export default All;
