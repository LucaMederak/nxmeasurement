import styled, { css } from "styled-components";

const MeasurementContainer = styled.div(
  ({
    theme: {
      palette,
      layout: { border },
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    flex-wrap: wrap;
    min-height: 20rem;
    background: ${palette.common.main};
    padding: 4rem;
    gap: 4rem;
    border-radius: ${border.main};
    justify-content: space-between;

    ${down(breakpoints.lg)} {
      flex-direction: column;
      width: 100%;
    }
  `
);

const MeasurementInfoItem = styled.div(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 40rem;
    flex-grow: 1;

    h2 {
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.light};
      color: ${palette.common.paragraph};
    }
    p {
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.medium};
      color: ${palette.common.heading};
    }

    ${down(breakpoints.lg)} {
      width: 100%;
    }
  `
);

const ButtonsWrapper = styled.div(
  ({
    theme: {
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    gap: 2rem;
    width: 100%;

    ${down(breakpoints.lg)} {
      width: 100%;
    }

    ${down(breakpoints.md)} {
      flex-wrap: wrap;
    }
  `
);

export { MeasurementContainer, MeasurementInfoItem, ButtonsWrapper };
