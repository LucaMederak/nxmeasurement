import styled, { css } from "styled-components";

interface ISidebarView {
  sidebarView: boolean;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PageContainer = styled.div(
  () => css`
    display: flex;
    width: 100%;
    position: relative;
  `
);

const PageRenderBox = styled.div<ISidebarView>(
  ({
    theme: {
      palette,
      media: { breakpoints, down },
      layout: { padding },
    },
    sidebarView,
  }) => css`
    display: flex;
    gap: 3rem;
    flex-direction: column;
    width: calc(100% - 26rem);
    padding: 6rem;
    padding-top: 12rem;
    min-height: 100vh;
    background: ${palette.common.background};
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.3s ease-out;

    ${!sidebarView &&
    css`
      width: calc(100% - 6rem);
    `}

    ${down(breakpoints.md)} {
      padding: 6rem;
      padding-top: 16rem;
      position: static;
      width: 100%;
    }

    ${down(breakpoints.sm)} {
      padding: 6rem ${padding.sm};
      padding-top: 16rem;
    }

    ${down(breakpoints.xs)} {
      padding: 6rem ${padding.xs};
      padding-top: 16rem;
    }
  `
);

export { LayoutContainer, PageContainer, PageRenderBox };
