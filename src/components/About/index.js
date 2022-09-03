import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faEnvira,
  faGithub,
  faHtml5,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect } from "react";
import { AnimatedLetter } from "..";
import "./index.scss";
//import Loader from "react-loaders";
import PreLoader from "../PreLoading/index";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);

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
      <div className="container about-page">
        {loading ? (
          <div className="main-load">
            <PreLoader />
          </div>
        ) : (
          <div className="main-content">
            <div className="text-zone">
              <h1>
                <AnimatedLetter
                  letterClass={letterClass}
                  strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                  idx={15}
                />
              </h1>
              <p>
                I'm very ambitious front-end developer. Logical and organised
                individual with a strong foundation in software engineering. I
                have 2+ years of experience with C++, Python, PHP and proficient
                in using Java. Seeking a Software Engineer role to prusue my
                passion for raising coding KPIs by providing error-free codes
                and creating quality products.
              </p>
              <br />
              <p>
                My problem-solving ability permit me to work extremely well
                below deadline pressure. With exceptional management skills, I
                have the ability to specify, plan my assignments and get them
                done on time
              </p>
              <br />
              <p>
                If I need to define myself in one sentence that would be a
                family person, passion in cooking, a sports fanatic, and
                tech-obsessed.
              </p>
            </div>
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faCss3} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faPython} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faGithub} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faEnvira} color="#EC4D28" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
