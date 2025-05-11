import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../Layout/Container.tsx";
import {FlexWrapper} from "../Layout/FlexWrapper.tsx";
import {useEffect, useState} from "react";
import {Logo} from "../Logo.tsx";
import {RouterHeaderMenu} from "./RouterHeaderMenu/RouterHeaderMenu.tsx";
import {RouterMobileMenu} from "./RouterMobileMenu/RouterMobileMenu.tsx";
import {routerLinksData} from "../../app/appData.ts";

type RouterHeaderPropsType = {
    isScrolled: boolean;
}

export const RouterHeader = () => {
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
                        <RouterHeaderMenu menuItems={routerLinksData}/>
                        <RouterMobileMenu menuItems={routerLinksData} isScrolled={isScrolled}/>
                    </FlexWrapper>
                </MarginWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header<RouterHeaderPropsType>`
    margin-bottom: 62px;
    position: sticky;
    top: 0;
    background-color: ${({ isScrolled }) => (isScrolled ? theme.colors.secondaryBg : theme.colors.primaryBg)};
    z-index: 2;
    transition: background-color 0.3s ease;
    
    @media ${theme.media.mobile} {
        margin-bottom: 34px;
    }
`

const MarginWrapper = styled(FlexWrapper)<RouterHeaderPropsType>`
    padding: ${({ isScrolled }) => (isScrolled ? '0' : '18px 0 8px')};
    transition: padding 0.3s ease;

    @media ${theme.media.tablet} {
        padding: ${({ isScrolled }) => (isScrolled ? '15px 0' : '18px 0 8px')};
    }
`