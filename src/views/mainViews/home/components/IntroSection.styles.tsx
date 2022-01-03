import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface ISwitch {
  activeSwitch?: boolean;
}

const IntroContainer = styled.section(
  ({
    theme: {
      media: { down, breakpoints },
      layout: { padding },
    },
  }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15rem 0 10rem 0;
    gap: 8rem;

    ${down(breakpoints.lg)} {
      flex-direction: column;
      padding: 10rem 0;
    }

    ${down(breakpoints.sm)} {
      flex-direction: column;
      padding: 5rem 0;
    }
  `
);

const IntroMainHeadlineWrapper = styled(motion.div)(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    width: 50%;

    h1 {
      font-size: ${fontSize.xxl};
      font-weight: ${fontWeight.extraBold};
      font-family: "Sora", sans-serif;
      color: ${palette.common.heading};
      max-width: 100%;

      span {
        color: ${palette.primary.main};
      }
    }

    p {
      color: ${palette.common.paragraph};
      font-size: ${fontSize.m};
      font-weight: ${fontWeight.light};
    }

    ${down(breakpoints.lg)} {
      width: 100%;
    }

    ${down(breakpoints.sm)} {
      h1 {
        font-size: ${fontSize.xl};
      }
      p {
        font-size: ${fontSize.s};
      }
    }

    ${down(breakpoints.xs)} {
      h1 {
        font-size: clamp(${fontSize.s}, 10vw, ${fontSize.xl});
      }
    }
  `
);

const IntroFeaturesWrapper = styled(motion.div)(
  ({
    theme: {
      palette,
      typography: { fontSize, fontWeight },
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style: none;

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2rem;
      width: 100%;
      font-size: ${fontSize.m};
      font-weight: ${fontWeight.light};
      color: ${palette.common.paragraph};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      background: ${palette.primary.light};
      border-radius: 50%;
      margin: 1rem;

      svg {
      width: 1.5rem;
      height: 1.5rem;
      path {
        fill: ${palette.primary.main};
      }
    }
    }

    

    ${down(breakpoints.sm)} {
      li {
          font-size: ${fontSize.s};
        }
      }
    }
  `
);

const SliderWrapper = styled.section(
  ({
    theme: {
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 40rem;
    width: 60rem;
    border-radius: 1rem;

    ${down(breakpoints.lg)} {
      width: 100%;
    }
  `
);

const ImageWrapper = styled(motion.img)(
  ({
    theme: {
      palette,
      media: { down, breakpoints },
    },
  }) => css`
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 1rem;
    object-fit: cover;
    width: 100%;
    height: 100%;
    box-shadow: ${palette.common["box-shadow"]};
    ${down(breakpoints.lg)} {
      width: 100%;
    }
  `
);

const SwitchWrapper = styled.div(
  ({
    theme: {
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 2rem;
    ${down(breakpoints.md)} {
      width: 100%;
    }
  `
);

const Switch = styled.div<ISwitch>(
  ({
    theme: {
      palette,
      media: { down, breakpoints },
    },
    activeSwitch,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    transition: 0.3s ease-out;
    :hover {
      background: ${palette.primary.light};
    }

    button {
      width: 1.7rem;
      height: 1.7rem;
      background: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
    }

    ${activeSwitch &&
    css`
      button {
        background: ${palette.primary.main};
      }
    `}

    ${down(breakpoints.md)} {
      button {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  `
);

export {
  IntroContainer,
  IntroMainHeadlineWrapper,
  IntroFeaturesWrapper,
  SliderWrapper,
  ImageWrapper,
  SwitchWrapper,
  Switch,
};
