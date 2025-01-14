import {useEffect, useState} from "react";
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

type StyledHeaderProps = {
    isScrolled: boolean;
}

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <StyledHeader isScrolled={isScrolled}>
            <Container>
                <MarginWrapper align='center' justify='space-between' isScrolled={isScrolled}>
                    <Logo />
                    <FlexWrapper gap='32px'>
                        <Menu menuItems={headerLinks} />
                        <LanguageSelect aria-label='Language change'>
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

const StyledHeader = styled.header<StyledHeaderProps>`
    margin-bottom: 62px;
    position: sticky;
    top: 0;
    background-color: ${({ isScrolled }) => (isScrolled ? theme.colors.secondaryBg : theme.colors.primaryBg)};
    z-index: 1;
    transition: background-color 0.3s ease;
`

const MarginWrapper = styled(FlexWrapper)<StyledHeaderProps>`
    padding: ${({ isScrolled }) => (isScrolled ? '0' : '18px 0 8px')};
    transition: padding 0.3s ease;
`

const LanguageSelect = styled.select`
    font-family: inherit;
    font-weight: 600;
    font-size: inherit;
    cursor: pointer;
    
    border: none;
    background-color: transparent;
    color: ${theme.colors.primaryLightText};
    
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

    &:focus-visible {
        outline: none;
        background-color: ${theme.colors.primaryBg};
    }
`