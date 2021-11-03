import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    font-size: 62.5%;
}   

body {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
    background: white;
}

button, textarea, input, a {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
}



`;

export default GlobalStyle;
