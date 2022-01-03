import styled, { css } from "styled-components";

const ProfileContainer = styled.div(
  ({
    theme: {
      palette,
      layout: { border },
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    min-height: 20rem;
    background: ${palette.common.main};
    padding: 4rem;
    gap: 4rem;
    border-radius: ${border.main};
    justify-content: space-between;

    ${down(breakpoints.lg)} {
      flex-direction: column;
      width: 100%;
    }
  `
);

const ProfileInfoWrapper = styled.div(
  ({
    theme: {
      palette,
      layout: { padding, border },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${down(breakpoints.lg)} {
      width: 100%;
    }
  `
);

const ProfileInfoItem = styled.div(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h2 {
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.light};
      color: ${palette.common.paragraph};
    }
    p {
      font-size: ${fontSize.s};
      font-weight: ${fontWeight.medium};
      color: ${palette.common.heading};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  `
);

const AvatarWrapper = styled.div(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
      media: { breakpoints, down },
      layout: { border },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40rem;
    border: 0.1rem dashed ${palette.common.grey};
    border-radius: ${border.main};
    padding: 4rem;

    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      object-fit: contain;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      background: ${palette.common.grey};
      svg {
        width: 60%;
        height: 60%;
        path {
          fill: white;
        }
      }
    }

    ${down(breakpoints.lg)} {
      width: 100%;
    }

    ${down(breakpoints.sm)} {
      span {
        width: 8rem;
        height: 8rem;
      }
    }
  `
);

export { ProfileContainer, ProfileInfoWrapper, ProfileInfoItem, AvatarWrapper };
