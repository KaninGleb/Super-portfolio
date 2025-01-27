import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {btnAnimation} from "../animations/animations.ts";

export const ContactBtn = styled.button`
    outline: 1px solid #c778dd;
    padding: 8px 16px;
    max-width: 200px;
    width: 100%;
    color: ${theme.colors.primaryText};
    white-space: nowrap;
    transition: .15s;
    animation: ${btnAnimation} 5s infinite;
    animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    
    &:hover {
        background-color: ${theme.colors.primaryHover};
        scale: 1.05;
    }
    
    @media ${theme.media.tablet} {
        display: none;
    }
`