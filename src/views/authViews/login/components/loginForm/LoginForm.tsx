import React from "react";
import { Link } from "react-router-dom";

//formik
import { Formik, FormikHelpers } from "formik";

//schema
import {
  INITIAL_FORM_VALUES,
  FORM_VALIDATION_SCHEMA,
} from "./LoginForm.schema";

//interfaces
import { TLoginFormValues } from "./LoginForm.interfaces";

//components
import FormHeading from "@components/form/heading/FormHeading";
import Button from "@components/form/button/Button";
import ReactLoading from "react-loading";
import TextField from "@components/form/textField/TextField";

//styles
import * as Styled from "./LoginForm.styles";

//redux
import { loginUser } from "@redux/user/user.actions";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (
    values: TLoginFormValues,
    actions: FormikHelpers<TLoginFormValues>
  ) => {
    dispatch(loginUser(values));
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <Styled.FormContainer>
      <FormHeading
        title="Logowanie do konta NxMeasurement"
        description="Witaj ponownie, zaloguj się za pomocą adresu email i hasła"
      />
      <Formik
        initialValues={{
          ...INITIAL_FORM_VALUES,
        }}
        validationSchema={FORM_VALIDATION_SCHEMA}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Styled.FormWrapper>
            <TextField name="email" label="E-mail" type="email" />
            <TextField name="password" label="Hasło" type="password" />
            <Button
              type="submit"
              variant={
                isSubmitting || !dirty || !isValid ? "disabled" : "primary"
              }
            >
              {isSubmitting ? (
                <ReactLoading type="spin" color="blue" width={20} height={20} />
              ) : (
                "Zaloguj się"
              )}
            </Button>

            <p>Nie masz jeszcze konta?</p>
            <Link to="/auth/register">Załóż konto</Link>
          </Styled.FormWrapper>
        )}
      </Formik>
    </Styled.FormContainer>
  );
};

export default LoginForm;
