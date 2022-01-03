import styled, { css } from "styled-components";

//interfaces
import { ITextareaProps, ITextareaError } from "./Textarea.interfaces";

const TextareaWrapper = styled.div<
  Pick<ITextareaProps, "width"> & ITextareaError
>(
  ({
    theme: {
      palette,
      layout: { border },
      typography: { fontSize, fontWeight },
      media: { breakpoints, down },
    },
    width,
    error,
  }) => css`
    width: ${width};
    flex-grow: 1;
    background: transparent;
    border-radius: 0.5rem;
    position: relative;
    transition: 0.3s ease-out;

    textarea {
      width: 100%;
      border-radius: ${border.main};
      font-size: ${fontSize.s};
      color: ${palette.common.heading};
      height: 15rem;
      background: transparent;
      outline: none;
      border: 0.1rem solid ${error ? "red" : "lightgrey"};
      padding: 2rem;
      resize: vertical;
      :focus {
        transition: 0.3s ease-out;
        border: 2px solid ${({ theme }) => theme.palette.primary.main};
      }
    }

    label {
      position: absolute;
      left: 2rem;
      top: 1.2rem;
      color: ${error ? "red" : "lightgrey"};
      font-size: ${fontSize.s};
      transition: 0.2s ease-out;
      pointer-events: none;
      background: ${palette.common.main};
    }

    textarea:focus ~ label {
      transform: translateY(-2.3rem);
      left: 1rem;
      padding: 0.2rem 1rem;
      font-size: 1.2rem;
      color: ${palette.primary.main};
      background: ${palette.common.main};
    }

    textarea:not(:placeholder-shown):not(:focus) ~ label {
      transform: translateY(-2.3rem);
      left: 1rem;
      background: ${palette.common.main};
      padding: 0.2rem 1rem;
      font-size: 1.2rem;
    }
  `
);

const ErrorWrapper = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.s};
  color: red;
  padding-top: 0.3rem;
`;

export { TextareaWrapper, ErrorWrapper };
