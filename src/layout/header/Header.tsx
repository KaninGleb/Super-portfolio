import {useEffect, useState} from "react";
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";

const headerLinks = [
    { name: 'home', id: ''},
    { name: 'projects', id: 'projects'},
    { name: 'skills', id: 'skills'},
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
                        <HeaderMenu menuItems={headerLinks}/>
                        <MobileMenu menuItems={headerLinks}/>
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

    @media ${theme.media.tablet} {
        padding: ${({ isScrolled }) => (isScrolled ? '15px 0' : '18px 0 8px')};
    }
`