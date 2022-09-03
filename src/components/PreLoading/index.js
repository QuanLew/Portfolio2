import React from "react";
import Astrau from "../../assets/images/astronaut.png";
import Cloud from "../../assets/images/cloud.png";
import "./index.scss";

const PreLoader = () => {
  return (
    <div className="container-preloader">
      <div className="preload">
        <img className="astraut" src={Astrau} alt="Astrau" />
        <h3>Landing on the website...</h3>
        <img className="cloud1" src={Cloud} alt="Cloud" />
        <img className="cloud2" src={Cloud} alt="Cloud" />
        <img className="cloud3" src={Cloud} alt="Cloud" />
      </div>
    </div>
  );
};

export default PreLoader;
