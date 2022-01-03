import { FieldConfig } from "formik";

export interface IFormikField {
  field: FieldConfig;
  form: {
    touched: {
      [key: string]: string;
    };
    errors: {
      [key: string]: string;
    };
  };
}
