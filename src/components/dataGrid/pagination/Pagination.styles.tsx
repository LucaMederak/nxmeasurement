import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid blue;
  padding: 1rem 0;
  width: 100%;
`;

const PaginationSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 10rem;
  border: 1px solid red;
`;

const PaginationPageList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  border: 1px solid yellow;
`;

const PaginationPageItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid red;
  background: ${({ currentPage }) => currentPage && "red"};
  cursor: pointer;
`;

export {
  PaginationWrapper,
  PaginationSelectWrapper,
  PaginationPageList,
  PaginationPageItem,
};
