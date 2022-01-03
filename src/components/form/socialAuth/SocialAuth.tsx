import React from "react";

//styles
import * as Styled from "./SocialAuth.styles";

//components
import SocialButton from "./button/Button";

const SocialAuth = () => {
  return (
    <Styled.SocialAuthWrapper>
      <Styled.SocialAuthTitle>
        <span />
        <p>lub</p>
        <span />
      </Styled.SocialAuthTitle>
      <SocialButton variant="google" />
      <SocialButton variant="facebook" />
    </Styled.SocialAuthWrapper>
  );
};

export default SocialAuth;
