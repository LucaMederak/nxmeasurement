import styled, { css } from "styled-components";
import { Form } from "formik";

const FormContainer = styled.div(
  ({
    theme: {
      media: { down, breakpoints },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    width: 60rem;
    border-radius: 1rem;
    gap: 5rem;
    padding: 10rem 0;

    ${down(breakpoints.md)} {
      width: 100%;
      gap: 2rem;
      padding: 5rem 0;
    }
  `
);

const FormWrapper = styled(Form)(
  ({ theme: { palette } }) => css`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    p {
      color: ${palette.common.paragraph};
      padding-top: 1rem;
      font-family: "Sora", sans-serif;
    }

    a {
      color: ${palette.primary.main};
      text-decoration: none;
      font-weight: 500;
      font-family: "Sora", sans-serif;
      cursor: pointer;
      transition: 0.3s ease-out;

      :hover {
        opacity: 0.7;
      }
    }
  `
);

export { FormContainer, FormWrapper };
