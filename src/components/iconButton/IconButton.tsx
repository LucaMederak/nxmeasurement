import React from "react";
import * as Styled from "./IconButton.styles";

//interfaces
import { IChildrenProps } from "@interfaces/childrenProps.interfaces";
import { IIconButtonProps } from "./IconButton.interfaces";

const IconButton = ({
  children,
  onClick,
}: IChildrenProps & IIconButtonProps) => {
  return (
    <Styled.IconButtonWrapper onClick={onClick}>
      {children}
    </Styled.IconButtonWrapper>
  );
};

export default IconButton;
