import styled, { css } from "styled-components";

import { IExportPopupStylesProps } from "./ExportPopup.interfaces";

const PopupContainer = styled.div(
  ({
    theme: {
      palette,
      media: { breakpoints, down, up },
      typography: { fontSize, fontWeight },
      layout: { border, padding },
    },
  }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 6.1rem);
    background: rgba(35, 45, 55, 0.37);
    z-index: 1;
    padding: 20rem 7rem;
    backdrop-filter: blur(3px);
    overflow-y: auto;

    ${down(breakpoints.md)} {
      padding: 10rem 4rem;
    }
    ${down(breakpoints.sm)} {
      padding: 10rem ${padding.sm};
    }
    ${down(breakpoints.sm)} {
      padding: 6rem ${padding.xs};
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

const PopupContentItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;

const PopupContentItem = styled.div<IExportPopupStylesProps>(
  ({
    theme: {
      palette,
      media: { breakpoints, down, up },
      typography: { fontSize, fontWeight },
      layout: { border },
    },
    variant,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    width: 60rem;
    min-height: 20rem;
    border-radius: 0.5rem;
    padding: 2rem;
    border: 4px solid rgba(189, 189, 189, 0.08);
    cursor: pointer;
    transition: 0.3s ease-out;
    :hover {
      box-shadow: ${palette.common["box-shadow"]};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: ${palette.common.heading};
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.medium};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
    }

    svg {
      width: 50%;
      height: 50%;
    }

    ${variant === "pdf" &&
    css`
      span {
        background: rgba(255, 0, 0, 0.22);
      }
      svg {
        path {
          fill: red;
        }
      }
    `}

    ${variant === "csv" &&
    css`
      span {
        background: rgba(0, 210, 34, 0.22);
      }
      svg {
        path {
          fill: #00d222;
        }
      }
    `}

     ${down(breakpoints.sm)} {
      a {
        flex-direction: column;
        text-align: center;
      }
    }
    ${down(breakpoints.xs)} {
      a {
        font-size: ${fontSize.xs};
      }
    }
  `
);

export {
  PopupContainer,
  PopupContentWrapper,
  PopupContentHeading,
  PopupContentItemsWrapper,
  PopupContentItem,
};
