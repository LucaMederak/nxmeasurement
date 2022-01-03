import React from "react";

//styles
import * as Styled from "./Pagination.styles";

const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Styled.PaginationWrapper>
      <Styled.PaginationSelectWrapper>
        <input placeholder="hello" />
      </Styled.PaginationSelectWrapper>
      <Styled.PaginationPageList>
        <button>prev</button>
        {pageNumbers.map((number) => (
          <Styled.PaginationPageItem
            currentPage={currentPage === number}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </Styled.PaginationPageItem>
        ))}
        <button>next</button>
      </Styled.PaginationPageList>
    </Styled.PaginationWrapper>
  );
};

export default Pagination;
