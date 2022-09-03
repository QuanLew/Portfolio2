// import React from "react";
// import ResizeObserver from "resize-observer-polyfill";
// import { AnimatePresence } from "framer-motion";
// import { ToggleLayer } from "react-laag";

// /**
//  * Icons
//  */

// import { Image } from "@styled-icons/boxicons-regular/Image";
// import { PlayCircle as Video } from "@styled-icons/boxicons-regular/PlayCircle";
// import { Music } from "@styled-icons/boxicons-solid/Music";
// import { File } from "@styled-icons/boxicons-regular/File";
// import { LocationOn as Location } from "@styled-icons/material/LocationOn";

// /**
//  * Components
//  */

// import Button from "./Button";
// import Menu from "./Menu";

// const FloatingButton = () => {
//   return (
//     <ToggleLayer
//       ResizeObserver={ResizeObserver}
//       placement={{
//         anchor: "CENTER",
//       }}
//       renderLayer={({ isOpen, layerProps, close }) => {
//         return (
//           <AnimatePresence>
//             {isOpen && (
//               <Menu
//                 {...layerProps}
//                 close={close}
//                 items={[
//                   { Icon: Image, value: "image", label: "Image" },
//                   { Icon: Video, value: "video", label: "Video" },
//                   { Icon: Music, value: "music", label: "Music" },
//                   { Icon: File, value: "file", label: "File" },
//                   { Icon: Location, value: "location", label: "Location" },
//                 ]}
//               />
//             )}
//           </AnimatePresence>
//         );
//       }}
//     >
//       {({ triggerRef, toggle, isOpen }) => (
//         <Button ref={triggerRef} onClick={toggle} isOpen={isOpen} />
//       )}
//     </ToggleLayer>
//   );
// };

// export default FloatingButton;

import React from "react";
import "./index.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { Fab, Action } from "react-tiny-fab";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const FloatingButton = (props) => {
  const ButtonPosition = {
    backgroundColor: "none",
    bottom: "24px",
    right: "24px",
  };

  const ButtonBase = {
    color: "#322514",
    backgroundColor: "#fbcbc9",
  };

  const ButtonChildren = {
    backgroundColor: "#fbcbc9",
  };

  return (
    <Fab
      mainButtonStyles={ButtonBase}
      style={ButtonPosition}
      icon={<AiOutlinePlus />}
      event={"hover"}
      alwaysShowTitle={false}
    >
      <Action text="Home" style={ButtonChildren}>
        <NavLink className="link" exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#322514" fontSize="20px" />
        </NavLink>
      </Action>
      <Action text="About-me" style={ButtonChildren}>
        <NavLink
          exact="true"
          activeclassname="active"
          className="link about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#322514" fontSize="20px" />
        </NavLink>
      </Action>
      <Action text="Contact" style={ButtonChildren}>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#322514" fontSize="20px" />
        </NavLink>
      </Action>
    </Fab>
  );
};

export default FloatingButton;
