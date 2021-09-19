import { createGlobalStyle } from "styled-components";

// For resetting
const GlobalStyles = createGlobalStyle`
    html {
        min-height: 100%;
        background-color: palevioletred;
    }
    * {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
