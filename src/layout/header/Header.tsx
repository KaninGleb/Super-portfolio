import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";

const headerLinks = ['home', 'works', 'about-me', 'contacts'];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align='center' justify='space-between'>
                    <Logo/>
                    <FlexWrapper gap='32px'>
                        <Menu menuItems={headerLinks}/>
                        <LanguageSelect>
                            <select>
                                <option>EN</option>
                                <option>RU</option>
                                <option>UA</option>
                            </select>
                        </LanguageSelect>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    padding: 32px 0 8px;
    background-color: #bde0fe;
`;

const LanguageSelect = styled.div`
    select {
        border: none;
        background-color: transparent;

        &:focus {
            outline: none;
        }
    }
`;