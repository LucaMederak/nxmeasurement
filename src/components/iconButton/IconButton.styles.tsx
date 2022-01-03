import styled, { css } from "styled-components";

const IconButtonWrapper = styled.button(
  ({ theme: { palette } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: none;
    background: transparent;
    transition: all 0.3s ease-out;
    cursor: pointer;
    /* z-index: 3; */

    svg {
      width: 50%;
      height: 50%;
      path {
        fill: ${palette.common.grey};
      }
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    :hover {
      background: ${palette.common.contrast};
      svg {
        path {
          fill: ${palette.primary.main};
        }
      }
    }
  `
);

export { IconButtonWrapper };
