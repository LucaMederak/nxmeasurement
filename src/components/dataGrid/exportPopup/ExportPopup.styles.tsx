import styled, { css } from "styled-components";

const PopupContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* display: flex;
  align-items: center; */
  width: 100%;
  min-height: 100%;
  background: rgba(35, 45, 55, 0.37);
  z-index: 70;
  padding: 20rem 7rem;
  backdrop-filter: blur(4px);
  overflow-y: hidden;
`;

const PopupContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 100rem;
  background: white;
  padding: 6rem;
  gap: 6rem;

  ${({ darkMode }) =>
    darkMode &&
    css`
      background: #181a20;
      color: white;
    `};
`;

const PopupContentHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.palette.primary.light};
  }

  svg {
    width: 50%;
    height: 50%;
    path {
      fill: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const PopupContentItemsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const PopupContentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60rem;
  min-height: 20rem;
  border-radius: 0.5rem;
  border: 4px solid rgba(189, 189, 189, 0.08);
  cursor: pointer;
  transition: 0.3s ease-out;
  gap: 3rem;
  :hover {
    box-shadow: 0px 4px 21px rgba(183, 183, 183, 0.25);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: black;
    font-size: 1.6rem;
    font-weight: 500;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  svg {
    width: 50%;
    height: 50%;
  }

  ${({ darkMode }) =>
    darkMode &&
    css`
      a {
        color: white;
      }
    `};

  ${({ variant }) =>
    variant === "pdf" &&
    css`
      span {
        background: rgba(255, 0, 0, 0.22);
      }
      svg {
        path {
          fill: red;
        }
      }
    `}

  ${({ variant }) =>
    variant === "csv" &&
    css`
      span {
        background: rgba(0, 210, 34, 0.22);
      }
      svg {
        path {
          fill: #00d222;
        }
      }
    `}
`;

export {
  PopupContainer,
  PopupContentWrapper,
  PopupContentHeading,
  PopupContentItemsWrapper,
  PopupContentItem,
};
