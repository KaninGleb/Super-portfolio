import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";
import {theme} from "../styles/Theme.tsx";
import {pulseLinkAnimation} from "../animations/animations.ts";

type LinkPropsType = {
    to?: string
    color?: string
    children: string
    outlineColor?: string
    mWidth?: string
}

export const RouterDomLink = (props: LinkPropsType) => {
    return (
        <StyledLink to={props.to}
                    color={props.color}
                    outlineColor={props.outlineColor}
                    mWidth={props.mWidth}>
            {props.children}
        </StyledLink>
    )
}

const StyledLink = styled(RouterLink)<LinkPropsType>`
    display: inline-block;
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
    
    @media ${theme.media.tablet} {
        &:hover {
            background-color: inherit;
        }
    }
`