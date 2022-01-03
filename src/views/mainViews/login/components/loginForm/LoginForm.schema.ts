//validation
import { object, SchemaOf, string } from "yup";

//interfaces
import { TLoginFormValues } from "./LoginForm.interfaces";

export const INITIAL_FORM_VALUES: TLoginFormValues = {
  email: "",
  password: "",
};

export const FORM_VALIDATION_SCHEMA: SchemaOf<TLoginFormValues> =
  object().shape({
    email: string()
      .required("To pole jest wymagane")
      .email("Nieprawidłowy adres email"),
    password: string().required("To pole jest wymagane"),
  });
