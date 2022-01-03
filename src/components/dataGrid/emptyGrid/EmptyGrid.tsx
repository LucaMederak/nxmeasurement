import React from "react";

//styles
import * as Styled from "./EmptyGrid.styles";

// //images
import noData from "@assets/noData.svg";

const EmptyGrid = () => {
  return (
    <Styled.EmptyGridWrapper>
      <img src={noData} />
      <h3>Nie znaleziono danych</h3>
    </Styled.EmptyGridWrapper>
  );
};

export default EmptyGrid;
