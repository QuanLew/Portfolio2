import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Toggle = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(1, 1, 1, 0.2);
  }
  transition: all 0.5s ease;
`;

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  border-radius: 0;
  width: 100%;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 26px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.1rem;
  color: #fff;
  font-size: 2.4rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 45%);
  font-size: 2rem;
  cursor: pointer;
  color: #fff;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -10%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  padding: 4px;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-hover-link);
`;
