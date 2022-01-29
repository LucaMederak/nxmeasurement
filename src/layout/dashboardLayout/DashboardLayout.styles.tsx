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
    min-height: calc(100vh - 6.1rem);
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
      position: static;
      width: 100%;
    }

    ${down(breakpoints.sm)} {
      padding: 6rem ${padding.sm};
    }

    ${down(breakpoints.xs)} {
      padding: 6rem ${padding.xs};
    }
  `
);

export { LayoutContainer, PageContainer, PageRenderBox };
