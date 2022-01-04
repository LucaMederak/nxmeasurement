import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface IActiveLinksPopup {
  activeLinksPopup?: boolean;
}

const NavContainer = styled.nav(
  ({
    theme: {
      palette,
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
  `
);

const NavWrapper = styled.div(
  ({
    theme: {
      palette,
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-height: 6rem;
    background: ${palette.common.main};
    border-bottom: 0.1rem solid ${palette.common.contrast};
  `
);

const NavItemBox = styled.div<IActiveLinksPopup>(
  ({ theme: { palette }, activeLinksPopup }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 6rem;
    height: 6rem;
    cursor: pointer;

    img {
      width: 2.5rem;
      height: 2.5rem;
      object-fit: contain;
    }

    svg {
      transition: 0.3s ease-out;
    }

    ${activeLinksPopup &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
  `
);

const NavUtilsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-right: 2rem;
`;

const DashboardLinksContainer = styled.div(
  ({
    theme: {
      palette,
      media: { down, breakpoints, up },
    },
  }) => css`
    width: 100%;

    ${up(breakpoints.md)} {
      display: none;
    }
  `
);

const DashboardLinks = styled(motion.div)(
  ({
    theme: {
      palette,
      media: { down, breakpoints, up },
    },
  }) => css`
    width: 100%;
    background: ${palette.secondary.main};
    min-height: 6rem;
    position: fixed;
    z-index: -1;
  `
);

const DashboardLinkActiveItem = styled.div(
  ({
    theme: {
      palette,
      media: { down, breakpoints, up },
      typography: { fontSize, fontWeight },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 6rem;
    padding-left: 2rem;
    background: ${palette.primary.main};
    z-index: 2;

    svg {
      width: 2rem;
      height: 2rem;
      path {
        fill: white;
      }
    }

    div {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 2rem;

      p {
        font-size: ${fontSize.s};
        font-weight: ${fontWeight.light};
        color: white;
      }
    }
  `
);

const DashboardLinkItem = styled.li(
  ({ theme: { palette } }) => css`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    padding-right: 1.5rem;
    transition: 0.3s ease-out;
    cursor: pointer;

    a {
      transition: 0.3s ease-out;
      font-size: 1.4rem;
      font-weight: 500;
      color: white;
      text-decoration: none;
    }

    svg {
      width: 1.7rem;
      height: 1.7rem;
      path {
        fill: white;
      }
    }

    :hover {
      background: rgba(48, 56, 66, 0.3);
      a {
        color: ${({ theme }) => theme.palette.primary.main};
      }

      svg {
        path {
          fill: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
  `
);

export {
  NavContainer,
  NavWrapper,
  NavItemBox,
  NavUtilsWrapper,
  DashboardLinksContainer,
  DashboardLinks,
  DashboardLinkItem,
  DashboardLinkActiveItem,
};
