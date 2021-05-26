import React, {  useState } from "react";
import "./PlayButton.css";

function PlayButton(props) {
  const [playButton, setPlayButton] = useState(true);

  return (
    <div className="play-button-wrapper">
      <button onClick={()=>{ setPlayButton(!playButton) }}>
        {playButton ? (
          <i class="far fa-play-circle"></i>
        ) : (
          <i class="far fa-pause-circle"></i>
        )}
      </button>
    </div>
  );
}

export default PlayButton;
