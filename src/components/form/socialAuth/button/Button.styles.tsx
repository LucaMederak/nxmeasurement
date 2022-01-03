import styled, { css } from "styled-components";

const SocialButton = styled.button(
  ({
    theme: {
      typography,
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 5.5rem;
    border-radius: ${border.main};
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: ${typography.fontWeight.light};
    transition: 0.3s ease-out;
    gap: 2rem;
    padding: 0 2rem;
    border: 0.1rem solid ${palette.common.grey};
    background: transparent;

    color: ${palette.common.heading};

    :hover {
      opacity: 0.8;
    }

    img {
      width: 2rem;
      height: 2rem;
      object-fit: contain;
    }

    svg {
      width: 2rem;
      height: 2rem;
      path {
        fill: ${palette.primary.main};
      }
    }

    ${down(breakpoints.sm)} {
      width: 100%;
    }
  `
);

export { SocialButton };
