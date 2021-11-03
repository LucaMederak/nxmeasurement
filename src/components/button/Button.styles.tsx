import styled, { css } from "styled-components";
import { IButtonProps } from "./Button.interfaces";

const ButtonWrapper = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: red;
  padding: 0 1rem;
  min-height: 6rem;
  cursor: pointer;
  border-radius: 0.5rem;
  color: white;
  font-family: "Sora", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  width: ${({ width }) => (width ? width : "100%")};
  text-transform: uppercase;
  transition: 0.3s ease-out;

  :hover {
    opacity: 0.7;
  }

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: transparent;
      border: 0.2rem solid ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.primary.main};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      background: ${({ theme }) => theme.palette.disabled};
    `}


    @media (max-width: ${({ theme: { media } }) => media.phone}) {
    width: 100%;
  }
`;

export { ButtonWrapper };
