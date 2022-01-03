import React from "react";

//icons
import * as Icon from "@icons/icons";
import styled from "styled-components";

//styles
import * as Styled from "./Button.styles";

//assets
import GoogleSvg from "@assets/google.svg";
import FacebookSvg from "@assets/facebook.svg";

interface IButton {
  variant: "google" | "facebook";
}

const Button = ({ variant }: IButton) => {
  return (
    <Styled.SocialButton>
      {variant === "google" && (
        <>
          <img src={GoogleSvg} />
          zaloguj się za pomocą google
        </>
      )}
      {variant === "facebook" && (
        <>
          <img src={FacebookSvg} />
          zaloguj się za pomocą facebooka
        </>
      )}
    </Styled.SocialButton>
  );
};

export default Button;
