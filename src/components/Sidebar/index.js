import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  TitleWrapper,
  AwesomeTitleNeon,
} from "../Sidebar/SidebarElements";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <TitleWrapper>
        <AwesomeTitleNeon>Q</AwesomeTitleNeon>
      </TitleWrapper>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            <Link to="/about">About Me</Link>
          </SidebarLink>
          <SidebarLink to="experience" onClick={toggle}>
            My Experience
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle}>
            Portfolio
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact Me
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
