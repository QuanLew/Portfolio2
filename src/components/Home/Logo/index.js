import "./index.scss";
import React, { useEffect, useRef } from "react";
import LogoQ from "../../../assets/images/logo-Q.png";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ME from "../../../assets/images/ME1.png";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 25,
        delay: 1.8,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <div className="about__me">
        <div className="about__me-image">
          <img className="img-me" src={ME} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
