import React, { useEffect } from "react";

//components
import Nav from "./nav/Nav";

//interfaces
import { IChildrenProps } from "@interfaces/childrenProps.interfaces";

//styles
import * as Styled from "./MainLayout.styles";

//context
import Alert from "@components/alert/Alert";

//redux
import { clearAlert } from "@redux/alert/alert.actions";
import { useSelector, useDispatch } from "react-redux";
import { State } from "@redux/reducers";

const PublicLayout = ({ children }: IChildrenProps) => {
  const dispatch = useDispatch();
  const { alertDisplay, type, message } = useSelector(
    (state: State) => state.alert
  );

  useEffect(() => {
    if (alertDisplay) {
      const timer = setTimeout(() => dispatch(clearAlert()), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [alertDisplay]);

  return (
    <Styled.MainLayoutContainer>
      <Nav />
      {alertDisplay && <Alert type={type} message={message} />}
      {children}
    </Styled.MainLayoutContainer>
  );
};

export default PublicLayout;
