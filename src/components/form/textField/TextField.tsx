import React from "react";
import { useField } from "formik";

//styles
import * as Styled from "./TextField.styles";

//interfaces
import { ITextFieldProps } from "./TextField.interfaces";

const TextField = ({
  name,
  type,
  label,
  width = "100%",
  ...inputProps
}: ITextFieldProps) => {
  const [field, meta] = useField(name);

  const configProps = {
    ...field,
    ...inputProps,
    width,
    error: false,
    helperText: "",
  };

  if (meta.touched && meta.error) {
    configProps.error = true;
    configProps.helperText = meta.error;
  }

  return (
    <Styled.TextFieldWrapper width={width}>
      <Styled.TextField {...configProps}>
        <input
          name={name}
          type={type}
          autoComplete="off"
          placeholder=" "
          value={field.value}
        ></input>
        <label htmlFor="input">{label}</label>
      </Styled.TextField>
      {configProps.error && (
        <Styled.ErrorWrapper>{configProps.helperText}</Styled.ErrorWrapper>
      )}
    </Styled.TextFieldWrapper>
  );
};

export default TextField;
