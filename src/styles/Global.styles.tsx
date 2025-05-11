import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme.tsx'

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
        min-width: 330px;
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

    ::selection {
        background-color: ${theme.colors.secondaryText};
        color: ${theme.colors.primaryText};
    }

    input, textarea {
        caret-color: ${theme.colors.secondaryText};
    }
    
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus input:-webkit-autofill,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        box-shadow: 0 0 0 1000px transparent inset;
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: ${theme.colors.primaryText};
    }

    ::-webkit-scrollbar {
        width: 12px;
        background-color: #424242;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(123, 123, 123, 0.5);
        border-radius: 10px;
        transition: background-color 0.3s ease;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #7b7b7b;
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
`
