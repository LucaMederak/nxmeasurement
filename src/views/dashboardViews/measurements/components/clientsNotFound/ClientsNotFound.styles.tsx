import styled, { css } from "styled-components";

const ClientsNotFoundWrapper = styled.div(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
      media: { breakpoints, down },
      layout: { border },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    width: 100%;
    min-height: 30rem;
    padding: 4rem;

    border-radius: ${border.main};
    background: ${palette.common.main};

    img {
      width: 12rem;
      height: 12rem;
    }

    h3 {
      font-size: ${fontSize.l};
      font-weight: ${fontWeight.bold};
      color: ${palette.common.heading};
    }

    ${down(breakpoints.lg)} {
      gap: 3rem;
    }

    ${down(breakpoints.sm)} {
      flex-direction: column;
      h3 {
        text-align: center;
      }
    }
  `
);

export { ClientsNotFoundWrapper };
