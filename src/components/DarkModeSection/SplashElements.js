import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
