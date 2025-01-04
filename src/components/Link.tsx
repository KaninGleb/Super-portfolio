import styled from "styled-components";

type LinkPropsType = {
    href: string
    color?: string
    children: string
    borderColor?: string
}

export const Link = (props: LinkPropsType) => {
    return (
        <StyledLink href={props.href} color={props.color} borderColor={props.borderColor}>
            {props.children}
        </StyledLink>
    );
};

const StyledLink = styled.a<LinkPropsType>`
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    color: ${props => props.color || '#ffffff'};
    
    border: 1px solid ${props => props.borderColor || '#c778dd'};
    padding: 8px 16px;
    max-width: 119px;
    height: 37px;
`