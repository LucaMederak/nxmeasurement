import React from "react";

//styles
import * as Styled from "./Alert.styles";

//interfaces
import { IAlertProps } from "./Alert.interfaces";

//icons
import { FaExclamationCircle, FaCheckCircle } from "@icons/icons";

const Alert = ({ type, message }: IAlertProps) => {
  return (
    <Styled.AlertContainer>
      {type === "success" ? (
        <>
          <FaCheckCircle color="lightgreen" size={30} />
          <Styled.AlertDescription>
            <h2>Sukces</h2>
            <p>{message}</p>
          </Styled.AlertDescription>
        </>
      ) : (
        <>
          <FaExclamationCircle color="red" size={30} />
          <Styled.AlertDescription>
            <h2>Error</h2>
            <p>{message}</p>
          </Styled.AlertDescription>
        </>
      )}
    </Styled.AlertContainer>
  );
};

export default Alert;
