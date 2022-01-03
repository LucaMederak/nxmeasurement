import React from "react";

//styles
import * as Styled from "./FormContainer.styles";

//interfaces
import { IChildrenProps } from "@interfaces/childrenProps.interfaces";

const FormContainer = ({ children }: IChildrenProps) => {
  return <Styled.FormContainer>{children}</Styled.FormContainer>;
};

export default FormContainer;
