import styled, { keyframes } from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const sideToSideSlide = keyframes`
0%{
  box-shadow: 0 0 0.1vw 0.4vw #fff7f7, 0 0 0.4vw 0.6vw #e97272,
    0 0 4vw 0.4vw #e50b0b, inset 0 0 1.5vw 0.4vw #e50b0b,
    inset 0 0 0.4vw 0.2vw #e50b0b, inset 0 0 0.5vw 0.2vw #fff7f7;
  background-position: 0 100%;
}
25%{
  box-shadow: 0 0 0.1vw 0.4vw #fff7f7, 0 0 0.4vw 0.6vw #e97272,
    0 0 4vw 0.4vw #e50b0b inset 0 0 1.5vw 0.4vw #e50b0b,
    inset 0 0 0.4vw 0.2vw #e50b0b, inset 0 0 0.5vw 0.2vw #e50b0b;
  background-position: 0 100%;
}
50%{
  box-shadow: 0 0 0.1vw 0.4vw #e97272, 0 0 0.4vw 0.6vw #e97272,
    0 0 4vw 0.4vw #e50b0b, inset 0 0 1.5vw 0.4vw #e50b0b,
    inset 0 0 0.4vw 0.2vw #e50b0b, inset 0 0 0.5vw 0.2vw #fff7f7;
  background-position: 100% 100%;
}
75%{
  box-shadow: 0 0 0.1vw 0.4vw #e97272, 0 0 0.4vw 0.6vw #e97272,
    0 0 4vw 0.4vw #e50b0b, inset 0 0 1.5vw 0.4vw #e50b0b,
    inset 0 0 0.4vw 0.2vw #fff7f7, inset 0 0 0.5vw 0.2vw #fff7f7;
  background-position: 100% 0;
}
100%{
  box-shadow: 0 0 0.1vw 0.4vw #e50b0b, 0 0 0.4vw 0.6vw #e50b0b,
    0 0 4vw 0.4vw #e97272, inset 0 0 1.5vw 0.4vw #e97272,
    inset 0 0 0.4vw 0.2vw #fff7f7, inset 0 0 0.5vw 0.2vw #fff7f7;
  background-position: 100% 0%;
}
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--color-bg);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: var(--transition);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--color-sidebar-link);

  &:hover {
    color: var(--color-hover-link);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const AwesomeTitleNeon = styled.h1`
  color: #ffd8d8;
  font-family: "Font Neon";
  font-size: 11rem;
  font-weight: lighter;
  padding: 0 3rem 0 3rem;
  text-shadow: 0.1vw 0vw 0.25vw #ffd8d8, 0.2vw 0vw 0.25vw #ffd8d8,
    0.4vw 0vw 0.25vw #ffd8d8, 0.1vw 0vw 0vw #f25757, 0.2vw 0vw 0vw #f25757,
    0.4vw 0vw 0vw #f25757, 0.1vw 0vw 0.1vw #f25757, 0.2vw 0vw 0.1vw #f25757,
    0.4vw 0vw 0.1vw #f25757, 0.1vw 0vw 2vw #f25757, 0.2vw 0vw 2vw #f25757,
    0.4vw 0vw 2vw #f25757, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b,
    0.4vw 0vw 5vw #e50b0b, 0.1vw 0vw 5vw #e50b0b, 0.2vw 0vw 20vw #e50b0b,
    0.4vw 0vw 10vw #e50b0b, 0.1vw 0vw 10vw #e50b0b, 0.2vw 0vw 30vw #e50b0b,
    0.4vw 0vw 10vw #e50b0b;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  cursor: default;
  outline: none;
  box-shadow: 0 0 0.1vw 0.4vw #fff7f7, 0 0 0.4vw 0.6vw #e97272,
    0 0 4vw 0.4vw #e50b0b, inset 0 0 1.5vw 0.4vw #e50b0b,
    inset 0 0 0.4vw 0.2vw #e97272, inset 0 0 0.5vw 0.2vw #fff7f7;
  border-radius: 1.5rem;
  animation: ${sideToSideSlide} 3.5s ease alternate infinite;
`;

export const SidebarWrapper = styled.div`
  color: var(--color-sidebar-link);
`;

export const SidebarMenu = styled.div`
  display: grid;
  margin-top: 20%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: var(--transition);
  text-decoration: none;
  color: var(--color-sidebar-link);
  cursor: pointer;

  &:hover {
    color: var(--color-hover-link);
    transition: var(--transition);
  }
`;
