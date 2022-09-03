import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { animateScroll as scroll } from "react-scroll/modules";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  Toggle,
} from "./NavbarElements";
import PlayerApp from "../MusicSection/Player";
import { HiOutlineSun as Sun } from "react-icons/hi";
import { BsMoonStars as Moon } from "react-icons/bs";

const Navbar = (props) => {
  const [songs] = useState([
    {
      title: "Falling",
      artist: "Artist1",
      src: "/music/Falling.mp3",
    },
    {
      title: "muonduoccungem",
      artist: "Artist1",
      src: "/music/muonduoccungem.mp3",
    },
    {
      title: "Craze",
      artist: "Artist2",
      src: "music/Shallow.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  //console.log("Theme " + props.theme);
  const icon = props.theme === "light" ? <Moon size={30} /> : <Sun size={35} />;

  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  // IconContext: change color Bar when window small
  return (
    <>
      <IconContext.Provider value={{ className: "top-react-icons" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <Toggle onClick={changeTheme}>{icon}</Toggle>
            </NavLogo>
            <PlayerApp
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}
            />
            <MobileIcon onClick={props.toggle}>
              <FaBars />
            </MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
