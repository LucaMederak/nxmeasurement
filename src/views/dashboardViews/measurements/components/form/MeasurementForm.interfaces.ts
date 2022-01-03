//formik
import { FormikHelpers } from "formik";
import { IMeasurementData } from "@interfaces/data/measurements.interfaces";
import { IClientsData } from "@interfaces/data/clients.interfaces";

export type IInitialValues = Omit<
  IMeasurementData,
  | "_id"
  | "user"
  | "bmi"
  | "ppm_mifflin"
  | "ppm_harris"
  | "whr"
  | "whtr"
  | "ymca"
  | "bmc"
  | "bmi_type"
  | "cpm"
  | "createdAt"
  | "updatedAt"
>;

export type IFormValues = Omit<
  IMeasurementData,
  "_id" | "user" | "createdAt" | "updatedAt"
>;

export interface IFormProps {
  clients: IClientsData[];
  initialValues: IInitialValues;
  handleSubmit: (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>
  ) => void;
}
