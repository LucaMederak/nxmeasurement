import styled, { css } from "styled-components";

import { IButtonProps } from "./Button.interfaces";

const ButtonWrapper = styled.button<Pick<IButtonProps, "variant" | "width">>(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
    variant,
    width,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${width};
    min-height: 5rem;
    border-radius: ${border.main};
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: ${typography.fontWeight.medium};
    transition: 0.3s ease-out;
    gap: 2rem;

    :hover {
      opacity: 0.8;
    }

    svg {
      width: 2rem;
      height: 2rem;
      path {
        fill: white;
      }
    }

    ${variant === "primary" &&
    css`
      background: ${palette.primary.main};
      color: white;
      border: none;
      min-height: 5rem;
    `}

    ${variant === "secondary" &&
    css`
      background: transparent;
      border: 0.2rem solid ${palette.primary.main};
      color: ${palette.primary.main};

      svg {
        path {
          fill: ${palette.primary.main};
        }
      }
    `}


    ${variant === "disabled" &&
    css`
      background: ${palette.primary.light};
      border: none;
      color: white;
      pointer-events: none;
      min-height: 5rem;
    `}

    ${down(breakpoints.sm)} {
      width: 100%;
    }
  `
);

export { ButtonWrapper };
