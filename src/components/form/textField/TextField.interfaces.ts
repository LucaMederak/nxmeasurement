export interface ITextFieldProps {
  name: string;
  type: "text" | "number" | "email" | "password" | "tel";
  label: string;
  width?: string;
  inputProps?: any;
}

export interface ITextFieldError {
  error?: boolean;
}
