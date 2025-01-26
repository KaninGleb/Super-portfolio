import {keyframes} from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const gradientAnimation = keyframes`
    0% {
        background: rgba(199, 120, 221, 0.5);
        box-shadow: 0 -150px 70px -120px rgba(171, 178, 191, 0.5) inset,
                    0 -220px 70px -120px rgba(199, 120, 221, 0.3) inset,
                    0 -280px 70px -120px rgba(171, 178, 191, 0.3) inset;
    }
    50% {
        background: rgba(128, 0, 128, 0.5);
        box-shadow: 0 -140px 70px -120px rgba(186, 85, 211, 0.5) inset,
                    0 -210px 70px -120px rgba(0, 128, 128, 0.5) inset,
                    0 -280px 70px -120px rgba(128, 0, 128, 0.3) inset;
    }
    100% {
        background: rgba(199, 120, 221, 0.5);
        box-shadow: 0 -150px 70px -120px rgba(171, 178, 191, 0.5) inset,
                    0 -220px 70px -120px rgba(199, 120, 221, 0.3) inset,
                    0 -280px 70px -120px rgba(171, 178, 191, 0.3) inset;
    }
`

export const shakeAnimation = keyframes`
    0% { transform: translate(0, 1px); }
    25% { transform: translate(0, -1px); }
    50% { transform: translate(0, 1px); }
    75% { transform: translate(0, -1px); }
    100% { transform: translate(0, 0); }
`

export const pulseLinkAnimation = (outlineColor: string) => keyframes`
    0% {
        outline-color: ${outlineColor};
        box-shadow: 0 0 8px rgba(199, 120, 221, 1);
        
    }
    50% {
        outline-color: ${outlineColor === theme.colors.primaryOutline ? theme.colors.secondaryLightAnim : theme.colors.primaryLightAnim};
        box-shadow: 0 0 5px rgba(199, 120, 221, 0.5);
        
    }
    100% {
        outline-color: ${outlineColor};
        box-shadow: 0 0 8px rgba(199, 120, 221, 1);
        
    }
`

export const btnAnimation = keyframes`
    0% {
        outline-width: 5px;
        outline-color: ${theme.colors.primaryAnim};
        white-space: nowrap;
    }
    50% {
        outline-width: 1px;
        outline-color: ${theme.colors.primaryLightAnim};
        color: ${theme.colors.primaryLightText};
        font-weight: 700;
        scale: 1.1;
    }
    100% {
        outline-width: 5px;
        outline-color: ${theme.colors.primaryAnim};
        white-space: nowrap;
    }
`

export const cvBtnAnimation = keyframes`
    0% {
        outline-width: 5px;
        outline-color: ${theme.colors.secondaryBg};
        white-space: nowrap;
        font-weight: 700;
    }
    50% {
        outline-width: 1px;
        outline-color: ${theme.colors.primaryLightAnim};
        font-weight: 500;
        scale: 1.1;
    }
    100% {
        outline-width: 5px;
        outline-color: ${theme.colors.secondaryText};
        white-space: nowrap;
        font-weight: 700;
    }
`

export const pulseAnimation = keyframes`
    0% {
        opacity: 1;
        box-shadow: 0 0 15px rgba(199, 120, 221, 1);

    }
    50% {
        opacity: 0.5;
        box-shadow: 0 0 5px rgba(199, 120, 221, 0.5);
    }
    100% {
        opacity: 1;
        box-shadow: 0 0 15px rgba(199, 120, 221, 1);
    }
`

export const imagePulseAnimation = keyframes`
    0% {
        opacity: 1;

    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`

export const fadeBgRight = keyframes`
    from {
        transform: translateX(80px);
    }
    50% {
        transform: translateX(0);
        
    }
    to {
        transform: translateX(80px);
    }
`

export const fadeBgLeft = keyframes`
    from {
        transform: translateX(-80px);
    }
    50% {
        transform: translateX(0);
        
    }
    to {
        transform: translateX(-80px);
    }
`