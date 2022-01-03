import styled, { css } from "styled-components";

const FormHeading = styled.div(
  ({
    theme: {
      palette,
      layout: { border },
      typography: { fontSize, fontWeight },
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 2rem;

    h2 {
      font-size: ${fontSize.l};
      font-weight: ${fontWeight.medium};
      color: ${palette.common.heading};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.palette.primary.light};

      svg {
        width: 50%;
        height: 50%;
        path {
          fill: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }

    ${down(breakpoints.sm)} {
      margin-bottom: 1rem;
      gap: 1.5rem;
      span {
        width: 3rem;
        height: 3rem;
      }
      h2 {
        font-size: ${fontSize.m};
      }
    }
  `
);

const FieldsWrapper = styled.div(
  ({
    theme: {
      palette,
      layout: { border },
      typography: { fontSize, fontWeight },
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    width: 100%;
  `
);

export { FormHeading, FieldsWrapper };
