import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Fira Code', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.primaryText};
    }
    
    a {
        text-decoration: none;
        color: ${theme.colors.primaryText};
    }
    
    ul {
        list-style: none;
    }
    
    button {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        background-color: unset;
        border: none;
        cursor: pointer;
    }
`