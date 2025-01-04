import styled from "styled-components";

type MenuPropsType = {
    menuItems: Array<string>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={'#'}><span>#</span>{item}</a>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        list-style-type: none;
    }
`;