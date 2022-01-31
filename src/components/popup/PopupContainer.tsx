import React, { useRef, useEffect } from "react";
import { IPopupProps } from "./PopupContainer.interfaces";
import * as Styled from "./PopupContainer.styles";

const PopupContainer = ({ children, openPopup, setOpenPopup }: IPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openPopup) {
      document.body.style.overflowY = "hidden";
    }
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!popupRef.current?.contains(e.target as Node)) {
        document.body.style.overflowY = "visible";
        setOpenPopup(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <Styled.PopupContainer>
      <Styled.PopupContentWrapper ref={popupRef}>
        {children}
      </Styled.PopupContentWrapper>
    </Styled.PopupContainer>
  );
};

export default PopupContainer;
