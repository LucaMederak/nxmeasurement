import React from "react";
import { useField } from "formik";

//styles
import * as Styled from "./Textarea.styles";

//interfaces
import { ITextareaProps } from "./Textarea.interfaces";

const Textarea = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  width = "100%",
  ...textareaProps
}: ITextareaProps) => {
  const [field, meta] = useField(name);

  const configProps = {
    ...field,
    ...textareaProps,
    error: false,
    helperText: "",
  };

  if (meta.touched && meta.error) {
    configProps.error = true;
    configProps.helperText = meta.error;
  }

  return (
    <Styled.TextareaWrapper width={width} {...configProps}>
      <textarea
        value={field.value}
        name={name}
        autoComplete="off"
        placeholder=" "
      />
      <label htmlFor="texarea">{label}</label>

      {configProps.error && (
        <Styled.ErrorWrapper>{configProps.helperText}</Styled.ErrorWrapper>
      )}
    </Styled.TextareaWrapper>
  );
};

export default Textarea;
