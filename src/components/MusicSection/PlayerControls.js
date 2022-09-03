import React from "react";
import {
  PlayerControlContainer,
  PlayerControlBackBtn,
  PlayerControlPlayBtn,
  PlayerControlFordwardBtn,
} from "./PlayerElements";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

const PlayerControls = (props) => {
  return (
    <PlayerControlContainer>
      <PlayerControlBackBtn onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </PlayerControlBackBtn>
      <PlayerControlPlayBtn
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </PlayerControlPlayBtn>
      <PlayerControlFordwardBtn onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </PlayerControlFordwardBtn>
    </PlayerControlContainer>
  );
};

export default PlayerControls;
