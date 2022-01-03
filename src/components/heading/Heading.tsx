import React from "react";
import { useNavigate } from "react-router";

//styles
import * as Styled from "./Heading.styles";

//interfaces
import { IHeadingProps } from "./Heading.interfaces";

//components
import IconButton from "@components/iconButton/IconButton";

//icons
import * as Icon from "@icons/icons";

const Heading = ({ title, parentPage }: IHeadingProps) => {
  const navigate = useNavigate();
  return (
    <Styled.HeadingWrapper>
      {parentPage && (
        <IconButton onClick={() => navigate(parentPage)}>
          <Icon.FaArrowLeft />
        </IconButton>
      )}
      <h1>{title}</h1>
    </Styled.HeadingWrapper>
  );
};

export default Heading;
