import React from "react";
import { Link } from "react-router-dom";

//formik
import { Formik, FormikHelpers } from "formik";

//schema
import {
  INITIAL_FORM_VALUES,
  FORM_VALIDATION_SCHEMA,
} from "./RegisterForm.schema";

//interfaces
import { TRegisterFormValues } from "./RegisterForm.interfaces";

//components
import FormHeading from "@components/form/heading/FormHeading";
import Button from "@components/form/button/Button";
import ReactLoading from "react-loading";
import TextField from "@components/form/textField/TextField";

//styles
import * as Styled from "./RegisterForm.styles";

//redux
import { createUser } from "@redux/user/user.actions";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (
    values: TRegisterFormValues,
    actions: FormikHelpers<TRegisterFormValues>
  ) => {
    dispatch(createUser(values));
    actions.setSubmitting(false);
  };

  return (
    <Styled.FormContainer>
      <FormHeading
        title="Załóż konto NXMeasurement"
        description="Witaj w aplikacji NXMeasurement, załóż konto i dodawaj pomiary Twoich klientów"
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
            <TextField name="name" label="Imię" type="text" />
            <TextField name="last_name" label="Nazwisko" type="text" />
            <TextField name="email" label="E-mail" type="email" />

            <TextField name="password" label="Hasło" type="password" />
            <TextField
              name="passwordConfirmation"
              label="Potwierdź hasło"
              type="password"
            />

            <Button
              type="submit"
              variant={
                isSubmitting || !dirty || !isValid ? "disabled" : "primary"
              }
            >
              {isSubmitting ? (
                <ReactLoading type="spin" color="blue" width={20} height={20} />
              ) : (
                "Załóż konto"
              )}
            </Button>
            <p>Masz już konto?</p>
            <Link to="/auth/login">Zaloguj się</Link>
          </Styled.FormWrapper>
        )}
      </Formik>
    </Styled.FormContainer>
  );
};

export default RegisterForm;
