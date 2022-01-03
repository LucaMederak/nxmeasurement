import styled, { css } from "styled-components";
import { IAutocompleteProps } from "./Autocomplete.interfaces";

interface IError {
  error: boolean;
}

const AutocompleteWrapper = styled.div<Pick<IAutocompleteProps, "width">>(
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
    position: relative;
  `
);

const TextField = styled.div<IError>(
  ({ theme: { typography, palette }, error }) => css`
    display: flex;
    align-items: center;
    background: transparent;
    border-radius: 0.5rem;
    position: relative;
    transition: 0.3s ease-out;
    border: 1px solid ${error ? "red" : "lightgrey"};
    padding: 0 1rem 0 2rem;
    gap: 1rem;
    width: 100%;

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

    input {
      height: 5rem;
      width: 100%;
      border: none;
      font-size: ${typography.fontSize.s};
      color: ${palette.common.heading};
      background: transparent;
      outline: none;
    }

    :focus-within {
      transition: 0.3s ease-out;
      border: 1px solid ${palette.primary.main};
      label {
        transform: translateY(-2.3rem);
        left: 1rem;
        padding: 0.2rem 1rem;
        font-size: 1.2rem;
        color: ${palette.primary.main};
        background: ${palette.common.main};
      }
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

const ErrorWrapper = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: red !important;
  padding-top: 0.8rem;
`;

export { AutocompleteWrapper, TextField, ErrorWrapper };
