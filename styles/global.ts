import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }
    
    ul {

        list-style: none;
    }

    button {

        cursor: pointer;
        border: none;
        border-radius: 5px;
    }
`
