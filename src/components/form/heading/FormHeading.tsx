import React from "react";
import * as Styled from "./FormHeading.styles";

//interfaces
import { IFormHeadingProps } from "./FormHeading.interfaces";

const Heading = ({ title, description }: IFormHeadingProps) => {
  return (
    <Styled.HeadingWrapper>
      <h1>{title}</h1>
      <p>{description}</p>
    </Styled.HeadingWrapper>
  );
};

export default Heading;
