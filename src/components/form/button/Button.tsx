import React, { ReactElement } from "react";

//interfaces
import { IButtonProps } from "./Button.interfaces";

//styles
import * as Styled from "./Button.styles";

const Button = ({
  children,
  variant = "primary",
  onClick,
  width = "100%",
  type = "button",
}: IButtonProps) => {
  return (
    <Styled.ButtonWrapper
      variant={variant}
      onClick={onClick}
      width={width}
      type={type}
    >
      {children}
    </Styled.ButtonWrapper>
  );
};

export default Button;
