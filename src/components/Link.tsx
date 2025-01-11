import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type LinkPropsType = {
    href: string
    color?: string
    children: string
    outlineColor?: string
    mWidth?: string
}

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
    outline: 1px solid ${props => props.outlineColor || theme.colors.secondaryText};
    max-width: ${props => props.mWidth || '109px'};
    padding: 8px 16px;
`