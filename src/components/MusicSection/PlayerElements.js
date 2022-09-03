import styled from "styled-components";

export const PlayerContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  text-align: center;
`;

export const PlayerItems = styled.div`
  justify-content: baseline;
`;

export const PlayerTitle = styled.h5`
  padding: 0.5px;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  cursor: default;
`;

export const PlayerControlContainer = styled.div``;

export const PlayerControlBackBtn = styled.button`
  font-size: 1.3rem;
  color: var(--color-sidebar-link);
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    color: var(--color-hover-link);
  }
`;

export const PlayerControlPlayBtn = styled.button`
  font-size: 1.3rem;
  color: var(--color-sidebar-link);
  background: transparent;
  border: none;
  padding: 0.3rem 0.7rem;

  &:hover {
    cursor: pointer;
    color: var(--color-hover-link);
  }
`;

export const PlayerControlFordwardBtn = styled.button`
  font-size: 1.3rem;
  background: transparent;
  border: none;
  color: var(--color-sidebar-link);

  &:hover {
    cursor: pointer;
    color: var(--color-hover-link);
  }
`;
