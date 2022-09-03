import React from "react";
import ME from "../../assets/images/ME1.png";

const ImageShows = () => {
  return (
    <div className="image_container">
      <div className="small__images">
        <img className="img-me" src={ME} alt="" />
        <img className="img-me" src={ME} alt="" />
        <img className="img-me" src={ME} alt="" />
      </div>
      <div className="show__image">
        <div className="show__image-frame">
          <img className="img-frame" src={ME} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageShows;
