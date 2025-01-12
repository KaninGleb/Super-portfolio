import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.tsx";
import arrowClose from "../../assets/images/Lang-change-closed.svg";

const headerLinks = [
    { name: 'home', id: 'home'},
    { name: 'works', id: 'projects'},
    { name: 'about-me', id: 'about-me'},
    { name: 'contacts', id: 'contacts'},
]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <MarginWrapper align='center' justify='space-between'>
                    <Logo/>
                    <FlexWrapper gap='32px'>
                        <Menu menuItems={headerLinks}/>
                        <LanguageSelect>
                            <option>EN</option>
                            <option>RU</option>
                            <option>UA</option>
                        </LanguageSelect>
                    </FlexWrapper>
                </MarginWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    margin-bottom: 62px;
`;

const MarginWrapper = styled(FlexWrapper)`
    padding: 32px 0 8px;
`

const LanguageSelect = styled.select`
    font-family: "Fira Code", sans-serif;
    font-weight: 600;
    font-size: 16px;
    
    border: none;
    background-color: transparent;
    color: ${theme.colors.primaryLightText};
    
    appearance: none;
    background-image: url(${arrowClose});
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 10px;
    
    &:hover {
        color: ${theme.colors.primaryText};
    }

    option {
        color: ${theme.colors.primaryLightText};
    }

    &:hover option {
        color: ${theme.colors.primaryLightText};
    }

    &:focus-visible {
        outline: none;
        background-color: ${theme.colors.primaryBg};
    }
`;