import React from "react";

//styles
import * as Styled from "./ClientsNotFound.styles";

//images
import noData from "@assets/noData.svg";

const ClientsNotFound = () => {
  return (
    <Styled.ClientsNotFoundWrapper>
      <img src={noData} />
      <h3>Brak klientów, dodaj pierwszego klienta aby móc dodać pomiar</h3>
    </Styled.ClientsNotFoundWrapper>
  );
};

export default ClientsNotFound;
