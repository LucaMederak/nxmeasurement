import styled, { css } from "styled-components";

//interfaces
import { IDarkMode } from "@interfaces/darkmode.interfaces";
import { IDataPopupProps } from "./AutocompletePopup.interfaces";

const PopupContainer = styled.ul<IDarkMode>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5.5rem;
  left: 0;
  background: white;
  width: 100%;
  border-radius: 0.5rem;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(197, 197, 197, 0.25);
  list-style: none;
  max-height: 30rem;
  overflow-y: auto;

  ${({ darkMode }) =>
    darkMode &&
    css`
      background: #181a20;
      color: white;
    `};
`;

const PopupItem = styled.li<Pick<IDataPopupProps, "disabledItem">>`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid rgba(196, 196, 196, 0.18);
  font-size: 1.6rem;
  font-weight: 400;

  cursor: pointer;
  transition: 0.3s ease-out;
  :hover {
    background: rgba(189, 189, 189, 0.08);
  }

  ${({ disabledItem }) =>
    disabledItem &&
    css`
      background: rgba(189, 189, 189, 0.08);
      pointer-events: none;
    `};
`;

export { PopupContainer, PopupItem };
