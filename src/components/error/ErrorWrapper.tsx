import React from "react";

//styles
import * as Styled from "./ErrorWrapper.styles";

//images
import errorData from "@assets/errorData.svg";

//components
import Button from "@components/button/Button";

const ErrorWrapper = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Styled.ErrorWrapper>
      <img src={errorData} />
      <h3>Pobieranie danych nie powiodło się</h3>
      <Button width="30rem" onClick={refreshPage}>
        Pobierz dane ponownie
      </Button>
    </Styled.ErrorWrapper>
  );
};

export default ErrorWrapper;
