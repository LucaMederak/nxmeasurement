import React, { useEffect } from "react";

//routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//context
import { SidebarViewProvider } from "@context/sidebarView";
import { useDarkMode } from "@context/darkMode";

//routes
import MainRoutes from "@routes/mainRoutes/Main.routes";
import ProtectedRoutes from "@routes/dashboardRoutes/Dashboard.routes";

//redux
import { useDispatch } from "react-redux";
import { getUser } from "@redux/user/user.actions";

//styles
import GlobalStyle from "@theme/globalStyle";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "@theme/theme";

const App = () => {
  const { darkMode } = useDarkMode();
  const dispatch = useDispatch();

  const theme = darkMode ? darkTheme : defaultTheme;

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SidebarViewProvider>
          <Router>
            <Routes>
              <Route path="/*" element={<MainRoutes />} />
              <Route path="/dashboard/*" element={<ProtectedRoutes />} />
            </Routes>
          </Router>
        </SidebarViewProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
