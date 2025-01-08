import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type LinkPropsType = {
    href: string
    color?: string
    children: string
    borderColor?: string
    mWidth?: string
}

export const Link = (props: LinkPropsType) => {
    return (
        <StyledLink href={props.href} color={props.color} borderColor={props.borderColor} mWidth={props.mWidth}>
            {props.children}
        </StyledLink>
    );
};

const StyledLink = styled.a<LinkPropsType>`
    font-weight: 500;
    color: ${props => props.color || theme.colors.primaryText};
    
    border: 1px solid ${props => props.borderColor || theme.colors.secondaryText};
    padding: 8px 16px;
    max-width: ${props => props.mWidth || '121px'};
    height: 37px;
`