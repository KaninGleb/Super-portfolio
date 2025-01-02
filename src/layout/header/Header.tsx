import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 32px 0 8px 0;
    background: #282c33;
    
    display: flex;
`