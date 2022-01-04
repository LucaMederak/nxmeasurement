import styled, { css } from "styled-components";

import { IDarkMode } from "@interfaces/darkmode.interfaces";

interface ISidebarView {
  sidebarView: boolean;
}

interface IActiveNavLink {
  activeNavLink: boolean;
}

const SidebarContainer = styled.div<IDarkMode>(
  ({
    theme: {
      palette,
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;
    min-height: 100%;
    position: fixed;
    background: ${palette.secondary.main};
    left: 0;
    top: 6rem;

    ${down(breakpoints.md)} {
      display: none;
    }
  `
);

const SidebarItemBox = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    min-height: 6rem;
    cursor: pointer;
    transition: 0.3s ease-out;

    svg {
      transition: 0.3s ease-out;
      width: 1.8rem;
      height: 1.8rem;
      path {
        fill: white;
      }
    }
  `
);

const SidebarNav = styled.div<ISidebarView>(
  ({ theme: { palette }, sidebarView }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    cursor: pointer;

    ${sidebarView &&
    css`
      svg {
        transform: rotate(180deg);
        path {
          fill: ${palette.primary.main};
        }
      }
    `}
  `
);

const SidebarList = styled.ul<IDarkMode & ISidebarView>(
  ({ theme: { palette }, sidebarView }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `
);

const SidebarItem = styled.li<IActiveNavLink>(
  ({ theme: { palette }, activeNavLink }) => css`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    padding-right: 1.5rem;
    transition: 0.3s ease-out;
    cursor: pointer;

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

    ${activeNavLink &&
    css`
      background: ${palette.primary.main};

      :hover {
        background: ${palette.primary.active};

        a {
          color: white;
        }

        svg {
          path {
            fill: white;
          }
        }
      }
    `}
  `
);

export {
  SidebarContainer,
  SidebarNav,
  SidebarList,
  SidebarItem,
  SidebarItemBox,
};
