import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

const headerLinks = ['home', 'works', 'about-me', 'contacts'];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <ul>
                <Menu menuItems={headerLinks}/>
                <li>
                    <select>
                        <option>EN</option>
                        <option>RU</option>
                        <option>UA</option>
                    </select>
                </li>
            </ul>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 32px 0 8px 0;
    background-color: #9afdfd;

    display: flex;
`