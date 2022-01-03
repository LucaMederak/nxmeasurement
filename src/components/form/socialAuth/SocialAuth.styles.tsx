import styled, { css } from "styled-components";

const SocialAuthWrapper = styled.div(
  ({
    theme: {
      palette,
      layout: { padding },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
  `
);

const SocialAuthTitle = styled.div(
  ({
    theme: {
      palette,
      layout: { padding },
      typography: { fontSize, fontWeight },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;

    span {
      flex: 1;
      height: 0.1rem;
      background: ${palette.common.contrast};
    }

    p {
      font-size: ${fontSize.xs};
      font-weight: ${fontWeight.light};
      padding: 0;
    }
  `
);

export { SocialAuthWrapper, SocialAuthTitle };
