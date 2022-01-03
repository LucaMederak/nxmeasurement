//formik
import { FormikHelpers } from "formik";
import { IClientsData } from "@interfaces/data/clients.interfaces";

export type IFormValues = Omit<IClientsData, "_id">;

export interface IFormProps {
  initialValues: IFormValues;
  handleSubmit: (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>
  ) => void;
}
