import styled, { css } from "styled-components";
import { Form } from "formik";

const FormWrapper = styled(Form)(
  ({
    theme: {
      palette,
      layout: { border },
      media: { breakpoints, down },
    },
  }) => css`
    display: flex;
    width: 100%;
    gap: 3rem;
    min-height: 20rem;
    background: ${palette.common.main};
    padding: 4rem;
    flex-wrap: wrap;

    ${down(breakpoints.sm)} {
      padding: 2rem;
    }
  `
);

export { FormWrapper };
