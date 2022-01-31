import styled, { css } from "styled-components";

const PopupContentHeading = styled.div(
  ({
    theme: {
      palette,
      media: { breakpoints, down, up },
      typography: { fontSize, fontWeight },
      layout: { border },
    },
  }) => css`
    display: flex;
    align-items: center;
    gap: 3rem;

    h2 {
      font-size: ${fontSize.l};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 0.5rem;
      background: ${palette.primary.light};
    }

    svg {
      width: 50%;
      height: 50%;
      path {
        fill: ${palette.primary.main};
      }
    }

    ${down(breakpoints.xs)} {
      gap: 1.5rem;
    }
  `
);

const PopupContentItemsWrapper = styled.div(
  ({
    theme: {
      palette,
      media: { breakpoints, down, up },
      typography: { fontSize, fontWeight },
      layout: { border },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    padding: 5rem 0;

    h3 {
      font-size: ${fontSize.xl};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
      text-align: center;
    }
  `
);

export { PopupContentHeading, PopupContentItemsWrapper };
