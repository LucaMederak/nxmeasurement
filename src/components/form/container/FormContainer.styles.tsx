import styled, { css } from "styled-components";
import { Form, Formik } from "formik";

const FormContainer = styled(Form)(
  ({
    theme: {
      palette,
      layout: { border },
      media: { breakpoints, down },
    },
  }) => css`
    padding: 4rem;
    width: 100%;
    background: ${palette.common.main};
    border: ${border.main};

    /* flex-wrap: wrap; */
  `
);

export { FormContainer };
