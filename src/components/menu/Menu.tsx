import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

type MenuPropsType = {
    menuItems: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <StyledUl>
                {props.menuItems.map((item, index) => (
                    <li key={index}>
                        <HeaderLink href={'#'}><span>#</span>{item}</HeaderLink>
                    </li>
                ))}
            </StyledUl>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`

`;

const StyledUl = styled.ul`
    display: flex;
    gap: 32px;
`

const HeaderLink = styled.a`
    span {
        color: ${theme.colors.secondaryText};
    }
    color: ${theme.colors.primaryLightText};
    
    &:hover {
        span { font-weight: 500; }
        color: ${theme.colors.primaryText};
    }
`