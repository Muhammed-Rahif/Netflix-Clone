var updateYtVideoId = (id) => {
  axios
    .get(
      `${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
      alert(err.message);
    });
};

useEffect(() => {
  if (cardsArray.length !== 0) {
    axios
      .get(
        `${type}/${
          cardsArray[[Math.floor(Math.random() * cardsArray.length)]].id
        }/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
