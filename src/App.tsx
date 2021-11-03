import React from "react";
//components
import Button from "@components/button/Button";

//theme
import GlobalStyle from "@theme/globalStyle";
import { theme } from "@theme/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div>
          <Button>hello</Button>
          hello world
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
