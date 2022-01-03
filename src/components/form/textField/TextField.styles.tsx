import styled, { css } from "styled-components";

//interfaces
import { ITextFieldProps, ITextFieldError } from "./TextField.interfaces";

const TextFieldWrapper = styled.div<Pick<ITextFieldProps, "width">>(
  ({
    theme: {
      palette,
      layout: { border },
      media: { breakpoints, down },
    },
    width,
  }) => css`
    width: ${width};
    flex-grow: 1;
  `
);

const TextField = styled.div<ITextFieldError>(
  ({ theme: { typography, palette }, error }) => css`
    background: transparent;
    border-radius: 0.5rem;
    position: relative;
    width: 100%;
    transition: 0.3s ease-out;

    input {
      height: 5rem;
      width: 100%;
      border-radius: 0.5rem;
      font-size: ${typography.fontSize.s};
      color: ${palette.common.heading};
      background: transparent;
      outline: none;
      border: 1px solid ${error ? "red" : "lightgrey"};
      padding: 2rem;

      :focus {
        transition: 0.3s ease-out;
        border: 1px solid ${palette.primary.main};
      }
    }

    label {
      position: absolute;
      left: 2rem;
      color: ${error ? "red" : "lightgrey"};
      top: 1.2rem;
      font-size: ${typography.fontSize.s};
      font-weight: 400;
      transition: 0.2s ease-out;
      pointer-events: none;
      background: ${palette.common.main};
    }

    input:focus ~ label {
      transform: translateY(-2.3rem);
      left: 1rem;
      padding: 0.2rem 1rem;
      font-size: 1.2rem;
      color: ${palette.primary.main};
      background: ${palette.common.main};
    }

    input:not(:placeholder-shown):not(:focus) ~ label {
      transform: translateY(-2.3rem);
      left: 1rem;
      padding: 0.2rem 1rem;
      font-size: 1.2rem;
      background: ${palette.common.main};
    }
  `
);

const ErrorWrapper = styled.p(
  ({ theme: { typography } }) => css`
    font-size: ${typography.fontSize.xs};
    color: red !important;
    padding-top: 0.8rem;
  `
);

export { TextFieldWrapper, TextField, ErrorWrapper };
