import React from "react";

//styles
import * as Styled from "./Button.styles";

//interfaces
import { IButtonProps } from "./Button.interfaces";
import { IChildrenProps } from "@interfaces/children.interfaces";

const Button = ({
  variant,
  type,
  disabled = false,
  children,
  onClick,
  width,
}: IButtonProps & IChildrenProps) => {
  return (
    <Styled.ButtonWrapper
      width={width}
      onClick={onClick}
      type={type}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </Styled.ButtonWrapper>
  );
};

export default Button;
