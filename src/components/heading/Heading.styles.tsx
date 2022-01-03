import styled, { css } from "styled-components";

const HeadingWrapper = styled.nav(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
      layout: { padding },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;

    h1 {
      font-size: ${fontSize.xl};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
    }
  `
);

export { HeadingWrapper };
