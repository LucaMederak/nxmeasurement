import React, { Dispatch } from "react";

//schema
import { FORM_VALIDATION_SCHEMA, sexData } from "./ClientForm.schema";

//interfaces
import { IFormProps } from "./ClientForm.interfaces";

//components
import TextField from "components/form/textField/TextField";
import Button from "@components/button/Button";
import AutocompleteWrapper from "@components/form/autocomplete/Autocomplete";
import ReactLoading from "react-loading";

//styles
import * as Styled from "./ClientForm.styles";

//formik
import { Formik } from "formik";

const ClientForm = ({ initialValues, handleSubmit }: IFormProps) => {
  return (
    <Formik
      initialValues={{
        ...initialValues,
      }}
      validationSchema={FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, dirty, isValid, values }) => (
        <Styled.FormWrapper>
          <TextField
            name="name"
            type="text"
            label="Imię"
            aria-label="name"
            width="40rem"
          />

          <TextField
            name="last_name"
            type="text"
            label="Nazwisko"
            aria-label="last_name"
            width="40rem"
          />

          <AutocompleteWrapper
            name="sex"
            label="Płeć"
            options={sexData}
            optionLabel="type"
            formOptionRender="type"
            width="40rem"
          />

          <TextField
            name="age"
            type="number"
            label="Wiek(lata)"
            aria-label="age"
            width="40rem"
          />

          <TextField
            name="email"
            type="email"
            label="E-mail"
            aria-label="email"
            width="40rem"
          />

          <Button
            type="submit"
            variant={
              isSubmitting || !dirty || !isValid ? "disabled" : "primary"
            }
          >
            {isSubmitting ? (
              <ReactLoading
                type="spin"
                color="orange"
                height="3rem"
                width="3rem"
              />
            ) : (
              "Wyślij"
            )}
          </Button>
        </Styled.FormWrapper>
      )}
    </Formik>
  );
};

export default ClientForm;
