import styled, { css } from "styled-components";

const AlertContainer = styled.div(
  ({
    theme: {
      palette,
      layout: { border },
      media: { breakpoints, down },
    },
  }) => css`
    position: fixed;
    right: 0;
    top: 10rem;
    min-width: 30rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    z-index: 4;
    background: ${palette.common.main};
    box-shadow: ${palette.common["box-shadow"]};
    padding: 3rem;
    border-radius: ${border.main} 0 0 ${border.main};

    ${down(breakpoints.md)} {
      top: 15rem;
    }

    ${down(breakpoints.sm)} {
      width: 100%;
    }
  `
);

const AlertDescription = styled.div(
  ({
    theme: {
      palette,
      layout: { border },
      typography: { fontSize, fontWeight },
    },
  }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    h2 {
      color: ${palette.common.heading};
      font-size: ${fontSize.l};
      font-family: "Sora", sans-serif;
    }
    p {
      color: ${palette.common.paragraph};
      padding: 0.5rem 0;
      font-size: ${fontSize.s};
    }
  `
);

export { AlertContainer, AlertDescription };
