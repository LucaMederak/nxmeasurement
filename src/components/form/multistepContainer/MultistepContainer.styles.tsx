import styled, { css } from "styled-components";
import { Form } from "formik";

interface IActiveStep {
  activeStep: boolean;
}

const FormWrapper = styled(Form)(
  ({
    theme: {
      palette,
      layout: { border },
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    background: ${palette.common.main};
    width: 100%;
    gap: 2rem;
    padding: 4rem;
    border-radius: ${border.main};

    ${down(breakpoints.sm)} {
      padding: 2rem;
    }
  `
);

const FormikStepWrapper = styled.div(
  ({
    theme: {
      palette,
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3rem;
  `
);

const FormStepper = styled.div(
  ({
    theme: {
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    gap: 1rem;
    width: 100%;
  `
);

const FormStep = styled.div<IActiveStep>(
  ({
    theme: {
      palette,
      media: { breakpoints, down },
    },
    activeStep,
  }) => css`
    display: flex;
    flex: 1;
    height: 0.5rem;
    background: ${palette.common.grey};
    border-radius: 2rem;

    ${activeStep &&
    css`
      background: ${palette.primary.main};
    `}
  `
);

const ButtonsWrapper = styled.div(
  ({
    theme: {
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    gap: 2rem;
    width: 100%;

    ${down(breakpoints.lg)} {
      flex-direction: column;
      button {
        flex: 1;
      }
    }
  `
);

export {
  FormikStepWrapper,
  FormStepper,
  FormStep,
  ButtonsWrapper,
  FormWrapper,
};
