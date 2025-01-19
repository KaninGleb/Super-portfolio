import styled, {css} from "styled-components";
import { theme } from "../../../styles/Theme.tsx";
import {SocialList} from "../../../components/SocialList.tsx";

type MenuPropsType = {
    menuItems: Array<{ name: string, id: string }>
}

export const MobileMenu = (props: MenuPropsType) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
                <StyledUl>
                    {props.menuItems.map((item, index) => (
                        <ListItem key={index}>
                            <HeaderLink href={`#${item.id}`}>
                                <span>#</span>{item.name}
                            </HeaderLink>
                        </ListItem>
                    ))}
                    <LanguageSelect aria-label='Language change'>
                        <option>EN</option>
                        <option>RU</option>
                        <option>UA</option>
                    </LanguageSelect>
                    <SocialList iconIds={['git', 'discord', 'figma']} showIcon={true}/>
                </StyledUl>
            </MobileMenuPopup>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;
    
    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 15px;
    right: 15px;
    width: 24px;
    height: 24px;
    z-index: 9999999;
    
    span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${theme.colors.primaryOutline};
        position: absolute;
        left: 0;
        bottom: 12px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.primaryOutline};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
        `}
        }
        
        &::after {
            content: '';
            display: block;
            width: 15px;
            height: 2px;
            background-color: ${theme.colors.primaryOutline};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 24px;
        `}
        }
    }
`

const StyledUl = styled.ul`

`

const ListItem = styled.li`
    position: relative;
`

const HeaderLink = styled.a`
    display: inline-block;
    padding: 12px 0;
    position: relative;
    transition: color 0.3s ease;
    
    span {
        color: ${theme.colors.secondaryText};
    }

    color: ${theme.colors.primaryLightText};

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        background-color: ${theme.colors.primaryOutline};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    &:hover {
        span {
            font-weight: 500;
        }
        color: ${theme.colors.primaryText};

        &::after {
            transform: scaleX(1);
        }
    }
`

const LanguageSelect = styled.select`
    font-family: inherit;
    font-weight: 600;
    font-size: inherit;
    cursor: pointer;
    
    border: none;
    background-color: transparent;
    color: ${theme.colors.primaryLightText};
    
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 10px;
    
    &:hover {
        color: ${theme.colors.primaryText};
    }

    option {
        color: ${theme.colors.primaryLightText};
        background-color: ${theme.colors.primaryBg};
    }

    &:focus-visible {
        outline: none;
    }
`