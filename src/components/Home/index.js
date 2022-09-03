import React, { useEffect, useState } from "react";
import LogoTitle from "../../assets/images/logo-Q.png";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import ImageShows from "./ImageShows";
import HeaderSocials from "./HeaderSocials";
import PreLoader from "../PreLoading/index";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(false);
  const nameArray = ["u", "a", "n", "L", "e"];
  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate("/contacts");
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    let timer_loading = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer_loading);
    };
  }, []);

  return (
    <>
      <div className="header__container">
        <div className="home__container home-page">
          {loading ? (
            <div className="main-load">
              <PreLoader />
            </div>
          ) : (
            <div className="main-content">
              <div className="text-zone">
                <h1>
                  <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i,</span>
                  <br />
                  <span className={`${letterClass} _13`}>I</span>
                  <span className={`${letterClass} _14`}>'m</span>
                  <img src={LogoTitle} alt="developer" />
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                  />
                  <br />
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={20}
                  />
                </h1>
                <h2>Fontend & Backend Developer / Java Expert</h2>
                <Link to="/contact" className="flat-button">
                  <div className="svg-wrapper">
                    <svg height="60" width="280">
                      <rect className="shape" height="60" width="280" />
                      <foreignObject
                        className="text"
                        x="60"
                        y="15"
                        width="300"
                        height="100"
                      >
                        <div className="text" onClick={navigateToContacts}>
                          Contact Me
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                </Link>
              </div>
              <ImageShows />
              <HeaderSocials />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
