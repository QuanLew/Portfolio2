import React, { useEffect, useRef, useState } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import { PlayerContainer, PlayerItems } from "./PlayerElements";

const PlayerApp = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <PlayerContainer>
      <audio
        src={process.env.PUBLIC_URL + props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      <PlayerItems>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />
      </PlayerItems>
      <PlayerItems>
        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />
      </PlayerItems>
    </PlayerContainer>
  );
};

export default PlayerApp;
