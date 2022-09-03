import styled, { css } from "styled-components";
import { PRIMARY, PRIMARY_2, BUTTON_SIZE } from "./constants";

const buttonHover = css`
  &:hover {
    background-color: ${PRIMARY_2};
    transform: scale(1.03);
  }
`;

export const ButtonBase = styled.button`
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  color: white;
  border: none;
  background-color: ${(p) => (p.isOpen ? PRIMARY_2 : PRIMARY)};
  border-radius: 50%;
  display: flex;
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  align-items: center;
  justify-content: center;
  outline: 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  transform: scale(${(p) => (p.isOpen ? 1.03 : 1)});

  ${(p) => !p.isOpen && buttonHover}

  & svg {
    transition: 0.25s ease-in-out;
    transform: rotate(${(p) => (p.isOpen ? 45 : 0)}deg);
  }
`;


