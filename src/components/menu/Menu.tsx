import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href=""><span>#</span>home</a>
                </li>
                <li>
                    <a href=""><span>#</span>works</a>
                </li>
                <li>
                    <a href=""><span>#</span>about-me</a>
                </li>
                <li>
                    <a href=""><span>#</span>contacts</a>
                </li>
                <li>
                    <select>
                        <option>EN</option>
                        <option>RU</option>
                    </select>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }
`