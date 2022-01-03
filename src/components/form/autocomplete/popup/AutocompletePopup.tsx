import React from "react";

import { FormikValues } from "formik";

//styles
import * as Styled from "./AutocompletePopup.styles";

//interfaces
import { IDataPopupProps } from "./AutocompletePopup.interfaces";

//context
import { useDarkMode } from "@context/darkMode";

const DataPopup = ({
  options,
  optionLabel,
  optionRender,
  disabledItem,
  handleChange,
}: IDataPopupProps & FormikValues) => {
  const { darkMode } = useDarkMode();

  return (
    <Styled.PopupContainer darkMode={darkMode}>
      {options.map((option) => (
        <Styled.PopupItem
          disabledItem={disabledItem}
          key={option[optionLabel]}
          onClick={() => handleChange(option[optionRender])}
        >
          {option[optionLabel]}
        </Styled.PopupItem>
      ))}
    </Styled.PopupContainer>
  );
};

export default DataPopup;
