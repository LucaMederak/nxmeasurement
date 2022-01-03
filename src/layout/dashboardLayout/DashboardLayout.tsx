import React, { useEffect } from "react";

//components
import Sidebar from "./sidebar/Sidebar";
import Nav from "./nav/Nav";
import Alert from "@components/alert/Alert";

//styles
import * as Styled from "./DashboardLayout.styles";

//context
import { useSidebarView } from "@context/sidebarView";

//redux
import { clearAlert } from "@redux/alert/alert.actions";
import { useSelector, useDispatch } from "react-redux";
import { State } from "@redux/reducers";

//interfaces
import { IChildrenProps } from "@interfaces/childrenProps.interfaces";

const DashboardLayout = ({ children }: IChildrenProps) => {
  const { sidebarView } = useSidebarView();
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
    <Styled.LayoutContainer>
      <Nav />
      <Styled.PageContainer>
        <Sidebar />
        <Styled.PageRenderBox sidebarView={sidebarView}>
          {alertDisplay && <Alert type={type} message={message} />}
          {children}
        </Styled.PageRenderBox>
      </Styled.PageContainer>
    </Styled.LayoutContainer>
  );
};

export default DashboardLayout;
