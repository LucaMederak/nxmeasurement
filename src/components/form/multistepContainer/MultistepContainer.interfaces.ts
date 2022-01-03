//formik
import { FormikConfig, FormikValues } from "formik";

export interface IFormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}
