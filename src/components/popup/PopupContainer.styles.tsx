import styled, { css } from "styled-components";

const PopupContainer = styled.div(
  ({
    theme: {
      palette,
      media: { breakpoints, down, up },
      typography: { fontSize, fontWeight },
      layout: { border, padding },
    },
  }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(35, 45, 55, 0.37);
    z-index: 1;
    padding: 20rem;
    backdrop-filter: blur(3px);
    overflow-y: auto;

    ${down(breakpoints.md)} {
      padding: 16rem 4rem;
    }
    ${down(breakpoints.sm)} {
      padding: 16rem ${padding.sm};
    }
    ${down(breakpoints.sm)} {
      padding: 16rem ${padding.xs};
    }
  `
);

const PopupContentWrapper = styled.div(
  ({
    theme: {
      palette,
      media: { breakpoints, down, up },
      typography: { fontSize, fontWeight },
      layout: { border },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    width: 100%;
    background: ${palette.common.main};
    padding: 6rem;
    gap: 6rem;

    ${down(breakpoints.sm)} {
      padding: 3rem;
    }
    ${down(breakpoints.xs)} {
      gap: 3rem;
      padding: 2rem;
    }
  `
);

export { PopupContainer, PopupContentWrapper };
