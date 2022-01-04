//validation
import { object, SchemaOf, string, ref } from "yup";

//interfaces
import { TRegisterFormValues } from "./RegisterForm.interfaces";

export const INITIAL_FORM_VALUES: TRegisterFormValues = {
  name: "",
  last_name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

export const FORM_VALIDATION_SCHEMA: SchemaOf<TRegisterFormValues> =
  object().shape({
    name: string().required("To pole jest wymagane"),
    last_name: string().required("To pole jest wymagane"),
    email: string()
      .required("To pole jest wymagane")
      .email("Nieprawidłowy adres email"),
    password: string()
      .required("To pole jest wymagane")
      .min(6, "Wymagane minimum 6 znaków"),
    passwordConfirmation: string()
      .required("To pole jest wymagane")
      .oneOf([ref("password"), null], "Wprowadzono nieprawidłowe hasło"),
  });
