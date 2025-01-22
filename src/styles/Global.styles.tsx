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
    
    html {
        scroll-behavior: smooth;
    }
    
    body {
        font-family: 'Fira Code', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.primaryText};
        min-width: 360px;
    }
    
    a {
        text-decoration: none;
        color: ${theme.colors.primaryText};
        cursor: pointer;
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
    
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
        }
    }
    
    @media (max-width: 768px) {
        * {
            animation: none !important;
            transition: none !important;
        }
        a:hover, button:hover {
            transition: none !important;
            transform: none !important;
            scale: none !important;
            border-bottom: none !important;
        }
        *:hover {
            transition: none !important;
            animation: none !important;
            transform: none !important;
        }
    }
`