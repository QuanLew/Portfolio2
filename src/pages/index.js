import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FloatingButton, Sidebar, Navbar } from "../components";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { lightTheme, darkTheme } from "../components/theme";

const Page = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  height: 500vh;
  width: 100%;
  scroll-behavior: smooth;
  line-height: 1.7;
  background: ${(props) => props.theme.gradient};
  transition: all 0.5s ease;
`;

const Layout = () => {
  const buttons = [
    {
      title: "home",
    },
    {
      title: "About",
    },
    {
      title: "Contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [theme, setTheme] = useState("dark");
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Page>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} setTheme={setTheme} theme={theme} />
          <FloatingButton buttons={buttons} />
          <div className="wrapper-page">
            <span className="tags top-tag">&lt;body&gt;</span>

            <Outlet />

            <span className="tags bottom-tag">
              &lt;/body&gt;
              <br />
              <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
          </div>
        </Page>
      </ThemeProvider>
    </>
  );
};

export default Layout;
