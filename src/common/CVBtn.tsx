import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {cvBtnAnimation} from "../styles/animations/animations.ts";

export const CVBtn = styled.a`
    outline: 1px solid ${theme.colors.secondaryOutline};
    padding: 8px 16px;
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.secondaryOutline};
    transition: .15s;
    animation: ${cvBtnAnimation} 5s infinite;
    animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
        background-color: ${theme.colors.secondaryHover};
        color: ${theme.colors.primaryText};
        scale: 1.05;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`