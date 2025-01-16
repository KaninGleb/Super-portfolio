import styled from "styled-components";
import { theme } from "../../styles/Theme.tsx";

type MenuPropsType = {
    menuItems: Array<{ name: string, id: string }>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <StyledUl>
                {props.menuItems.map((item, index) => (
                    <ListItem key={index}>
                        <HeaderLink href={`#${item.id}`}>
                            <span>#</span>{item.name}
                        </HeaderLink>
                    </ListItem>
                ))}
            </StyledUl>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav``

const StyledUl = styled.ul`
    display: flex;
    gap: 32px;
`

const ListItem = styled.li`
    position: relative;
`

const HeaderLink = styled.a`
    display: inline-block;
    padding: 12px 0;
    position: relative;
    transition: color 0.3s ease;
    
    span {
        color: ${theme.colors.secondaryText};
    }

    color: ${theme.colors.primaryLightText};

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        background-color: ${theme.colors.primaryOutline};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    &:hover {
        span {
            font-weight: 500;
        }
        color: ${theme.colors.primaryText};

        &::after {
            transform: scaleX(1);
        }
    }
`