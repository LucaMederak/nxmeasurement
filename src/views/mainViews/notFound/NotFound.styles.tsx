import styled, { css } from "styled-components";

import { IDarkMode } from "@interfaces/darkmode.interfaces";

const NotFoundWrapper = styled.div<IDarkMode>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  background: white;

  h1 {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 12rem;
    font-family: "Sora", sans-serif;
    text-align: center;
  }
  h2 {
    color: black;
    padding: 2rem;
    font-size: 3rem;
    text-align: center;
  }

  ${({ darkMode }) =>
    darkMode &&
    css`
      background: #181a20;
      h2 {
        color: white;
      }
    `};
`;

export { NotFoundWrapper };
