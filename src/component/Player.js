import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";

function Player({ currentSong,isPlaying,SetIsPlaying}) {
  const audioRef = useRef(null);
  const playSongHandler = () => {

      if (isPlaying) {
        audioRef.current.pause();
        SetIsPlaying(!isPlaying);
      } else {
        audioRef.current.play();
        SetIsPlaying(!isPlaying);
      }
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>start</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />

        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={faPlay}
          onClick={playSongHandler}
        />

        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />

        {/* <FontAwesomeIcon 
          icon={faVolumeDown} 
        /> */}
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}
export default Player;
