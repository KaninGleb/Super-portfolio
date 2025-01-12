import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

type MenuPropsType = {
    menuItems: Array<{ name: string, id: string }>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <StyledUl>
                {props.menuItems.map((item, index) => (
                    <ListItem key={index}>
                        <HeaderLink href={`#${item.id}`}><span>#</span>{item.name}</HeaderLink>
                    </ListItem>
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

const ListItem = styled.li`
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom: 2px solid ${theme.colors.primaryOutline};
    }
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