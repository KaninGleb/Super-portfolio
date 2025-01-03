import styled from "styled-components";

type MenuPropsType = {
    menuItems: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            {props.menuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a href=""><span>#</span>{item}</a>
                    </li>
                )
            })}
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }
`