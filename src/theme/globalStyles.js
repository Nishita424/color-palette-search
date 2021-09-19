import { createGlobalStyle } from "styled-components";

// For resetting
const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
    }
    * {
        margin: 0;
        padding: 0;
        ${"" /* background-color: palevioletred; */}
    }
`;

export default GlobalStyles;
