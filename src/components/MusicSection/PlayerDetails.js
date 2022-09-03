import React from "react";
import { PlayerTitle } from "./PlayerElements";

const PlayerDetails = (props) => {
  return <PlayerTitle>{props.song.title}</PlayerTitle>;
};

export default PlayerDetails;
