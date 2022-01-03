import React, { useState, useRef, useEffect, ChangeEvent } from "react";

import { useField, useFormikContext, FormikValues } from "formik";

//context
import { useDarkMode } from "@context/darkMode";

//styles
import * as Styled from "./Autocomplete.styles";

//components
import AutocompletePopup from "./popup/AutocompletePopup";

//interfaces
import { IAutocompleteProps } from "./Autocomplete.interfaces";
import { TOptions } from "./Autocomplete.interfaces";

//icons
import * as Icon from "@icons/icons";

const Autocomplete = ({
  name,
  label,
  options,
  optionLabel,
  formOptionRender,
  width = "100%",
}: IAutocompleteProps) => {
  const { setFieldValue, values }: FormikValues = useFormikContext();
  const [field, meta] = useField(name);
  const [popup, setPopup] = useState(false);
  const [inputContent, setInputContent] = useState(field.value);
  const optionRender = formOptionRender || optionLabel;

  const configProps = {
    ...field,
    error: false,
    helperText: "",
  };

  if (meta && meta.touched && meta.error) {
    configProps.error = true;
    configProps.helperText = meta.error;
  }

  //change formik field helper
  const handleChange = (value: string) => {
    setFieldValue(name, value !== null ? value : "");
    const getOptionLabel = options.find(
      (option) => option[optionRender] === value
    );
    if (getOptionLabel) {
      setInputContent(getOptionLabel[optionLabel]);
      setPopup(false);
    }
  };

  //close popup helper
  const listFilter = options.filter(
    (option) => option[optionLabel] === inputContent
  );

  useEffect(() => {
    if (listFilter.length < 1) {
      setFieldValue(name, "");
      setInputContent("");
    }
    return;
  }, [popup]);

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (!popupRef.current?.contains(e.target)) {
        setPopup(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  //data popup filter
  const optionFilter = (options: TOptions[]) => {
    if (options.find((option) => option[optionLabel] === inputContent)) {
      return options;
    }
    return options.filter((option) =>
      option[optionLabel]
        .toString()
        .toLowerCase()
        .includes(inputContent.toLowerCase())
    );
  };

  return (
    <Styled.AutocompleteWrapper width={width}>
      <Styled.TextField
        {...configProps}
        ref={popupRef}

        // tabIndex={1}
        // onFocus={(e) => {
        //   if (e.currentTarget === e.target) {
        //     console.log("fokus na sobie");
        //     setPopup(true);
        //   } else {
        //     console.log("fokus na elemencie potomnym", e.target);
        //     // setPopup(true);
        //     setPopup(true);
        //   }
        //   // if (!e.currentTarget.contains(e.relatedTarget)) {
        //   //   // Not triggered when swapping focus between children
        //   //   // setPopup(true);
        //   //   console.log("focus aktywny poza poddrzewem");
        //   // }
        // }}
        // onBlur={(e) => {
        //   if (e.currentTarget === e.target) {
        //     console.log("fokus utracony na sobie");
        //     setPopup(true);
        //   } else {
        //     console.log("fokus utracony na elemencie potomnym", e.target);
        //     setPopup(true);
        //   }
        //   // if (!e.currentTarget.contains(e.relatedTarget)) {
        //   //   // Not triggered when swapping focus between children
        //   //   console.log("fokus poza poddrzewem");
        //   //   setPopup(false);
        //   // }
        // }}
      >
        <input
          // name={name}
          // type="search"
          autoComplete="off"
          placeholder=" "
          onChange={(e) => setInputContent(e.target.value)}
          value={inputContent}
          onClick={() => setPopup(!popup)}
        ></input>
        <label htmlFor="input">{label}</label>

        <Icon.FaSortDown />
        {popup && (
          <AutocompletePopup
            options={optionFilter(options)}
            optionLabel={optionLabel}
            optionRender={optionRender}
            handleChange={handleChange}
            disabledItem={false}
          />
        )}
      </Styled.TextField>
      {configProps.error && (
        <Styled.ErrorWrapper>{configProps.helperText}</Styled.ErrorWrapper>
      )}
    </Styled.AutocompleteWrapper>
  );
};

export default Autocomplete;
