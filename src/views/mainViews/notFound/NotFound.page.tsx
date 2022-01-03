import React from "react";

//context
import { useDarkMode } from "@context/darkMode";

//styles
import * as Styled from "./NotFound.styles";

const NotFound = () => {
  const { darkMode } = useDarkMode();
  return (
    <Styled.NotFoundWrapper darkMode={darkMode}>
      <h1>404</h1>
      <h2>Strona nie istnieje</h2>
    </Styled.NotFoundWrapper>
  );
};

export default NotFound;
