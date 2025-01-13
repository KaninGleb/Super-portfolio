import styled, {keyframes} from "styled-components";
import {theme} from "../styles/Theme.tsx";

type LinkPropsType = {
    href: string
    color?: string
    children: string
    outlineColor?: string
    mWidth?: string
}

export const pulseLinkAnimation = (outlineColor: string) => keyframes`
    0% {
        outline-color: ${outlineColor};
    }
    50% {
        outline-color: ${outlineColor === theme.colors.primaryOutline ? theme.colors.secondaryLightAnim : theme.colors.primaryLightAnim};
    }
    100% {
        outline-color: ${outlineColor};
    }
`;

export const Link = (props: LinkPropsType) => {
    return (
        <StyledLink href={props.href} color={props.color} outlineColor={props.outlineColor} mWidth={props.mWidth}>
            {props.children}
        </StyledLink>
    );
};

const StyledLink = styled.a<LinkPropsType>`
    font-weight: 500;
    color: ${props => props.color || theme.colors.primaryText};
    outline: 1px solid ${props => props.outlineColor || theme.colors.secondaryOutline};
    max-width: ${props => props.mWidth || '109px'};
    padding: 8px 16px;
    transition: background-color 0.15s, transform 0.15s;
    animation: ${props => pulseLinkAnimation(props.outlineColor || theme.colors.secondaryOutline)} 3s infinite;
    animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);


    &:hover {
        background-color: ${props =>
                props.outlineColor === theme.colors.primaryOutline ? theme.colors.secondaryHover : theme.colors.primaryHover};
        transform: scale(1.03);
    }
`;
