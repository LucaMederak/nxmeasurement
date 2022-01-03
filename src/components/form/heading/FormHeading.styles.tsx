import styled, { css } from "styled-components";

const HeadingWrapper = styled.div(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
      layout: { padding },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      color: ${palette.common.heading};
      font-family: "Sora", sans-serif;
      font-size: ${fontSize.xl};
      font-weight: ${fontWeight.extraBold};
    }

    p {
      color: ${palette.common.paragraph};
    }

    ${down(breakpoints.xs)} {
      h1 {
        font-size: 8vw;
      }
      p {
        font-size: 4vw;
      }
    }
  `
);

export { HeadingWrapper };
