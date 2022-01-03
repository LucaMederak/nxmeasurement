import { object, string, number } from "yup";

export const FORM_VALIDATION_SCHEMA = object().shape({
  name: string().required("To pole jest wymagane"),
  last_name: string().required("To pole jest wymagane"),
  sex: string().required("To pole jest wymagane"),
  age: number()
    .required("To pole jest wymagane")
    .min(1, "Wymagany minimum rok"),
  email: string().email("Nieprawidłowy adres email"),
});

export const sexData = [{ type: "mężczyzna" }, { type: "kobieta" }];
