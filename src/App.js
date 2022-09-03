// import "./App.css";
// import React, { useState } from "react";
// import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "./components/GlobalStyles";
// import { lightTheme, darkTheme } from "./components/theme";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar/";

// function App() {
//   const [theme, setTheme] = useState("light");
//   const themeMode = theme === "light" ? lightTheme : darkTheme;

//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return <Navbar />;
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Home } from "./components";
import "./App.scss";
import "./components/FontawesomeIcons";
import Layout from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
