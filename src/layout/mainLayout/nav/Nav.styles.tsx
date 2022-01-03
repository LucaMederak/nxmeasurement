import styled, { css } from "styled-components";

const NavWrapper = styled.nav(
  ({
    theme: {
      palette,
      layout: { padding },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 8rem;
    transition: 0.3s ease-out;
    padding: 1rem 0;
    background: ${palette.common.main};
    border-bottom: 0.1rem solid ${palette.common.contrast};

    img {
      cursor: pointer;
      width: 22rem;
      height: 7rem;
      object-fit: contain;
    }

    ${down(breakpoints.xs)} {
      img {
        cursor: pointer;
        width: 60vw;
        height: 5rem;
        object-fit: contain;
      }
    }
  `
);

const LinksWrapper = styled.nav(
  ({
    theme: {
      palette,
      media: { down, breakpoints },
      typography: { fontSize, fontWeight },
    },
  }) => css`
    display: flex;
    align-items: center;
    gap: 3rem;

    a {
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.medium};
      color: ${palette.common.heading};
      text-decoration: none;
      transition: 0.3s ease-out;
      :hover {
        color: ${palette.primary.main};
      }
    }

    ${down(breakpoints.md)} {
      display: none;
    }
  `
);

const Burger = styled.button(
  ({
    theme: {
      palette,
      media: { up, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-out;

    svg {
      width: 100%;
      height: 100%;
      path {
        fill: ${palette.common.grey};
      }
    }

    :hover {
      opacity: 0.8;
    }

    ${up(breakpoints.md)} {
      display: none;
    }
  `
);

export { NavWrapper, Burger, LinksWrapper };
