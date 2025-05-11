import styled, {css} from "styled-components";
import {Fade} from "react-awesome-reveal";
import {theme} from "../../styles/Theme.tsx";
import {SocialList} from "../../common/SocialList.tsx";
import {Logo} from "../../common/Logo.tsx";
import {useEffect, useState} from "react";
import {ContactBtn} from "../../common/ContactBtn.tsx";
import {CVBtn} from "../../common/CVBtn.tsx";
import CV from "../../assets/cv/Kanin_Gleb_Front-end_developer_CV.pdf";
import {Link} from "react-router-dom";
import {Modal} from "../../common/Modal.tsx";

type RouterMobileMenuPropsType = {
    menuItems: Array<{ symbol: string, name: string, id: string }>
    isScrolled: boolean
}

export const RouterMobileMenu = (props: RouterMobileMenuPropsType) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleToggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    useEffect(() => {
        if (menuIsOpen || isModalVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuIsOpen, isModalVisible]);

    return (
        <StyledRouterMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={menuIsOpen} onClick={ ()=>{setMenuIsOpen(false)} }>
                <Logo isOpen={menuIsOpen}/>
                <StyledUl>
                    {props.menuItems.map((item, index) => (
                        <ListItem key={index}>
                            <Fade delay={index * 100} direction={'down'} duration={600}>
                                <HeaderLink to={`/${item.id}`}>
                                    <span>{item.symbol}</span>{item.name}
                                </HeaderLink>
                            </Fade>
                        </ListItem>
                    ))}
                    <ListItem>
                        <Fade delay={props.menuItems.length * 100} direction={'down'}>
                            <StyledContactBtn type='button' onClick={handleToggleModal}>Contact me!!</StyledContactBtn>
                            <StyledCVBtn type='submit' href={CV} download>Download CV</StyledCVBtn>
                        </Fade>
                    </ListItem>
                    <ListItem onClick={ (e)=>e.stopPropagation() }>
                        <Fade delay={(props.menuItems.length + 1) * 100} direction={'down'}>
                            <LanguageSelect aria-label='Language change'>
                                <option>EN</option>
                                <option>RU</option>
                            </LanguageSelect>
                        </Fade>
                    </ListItem>
                </StyledUl>
                <StyledSocialList displayFlex={true}
                                    gap={'8px'}
                                    iconIds={['git', 'discord', 'figma']}
                                    showIcon={true}
                                    iconSize={'64px'}
                />
            </MobileMenuPopup>
            <Modal isVisible={isModalVisible} onClose={handleToggleModal} />
        </StyledRouterMobileMenu>
    )
}

const StyledRouterMobileMenu = styled.nav`
    font-size: 26px;
    display: none;
    position: relative;
    
    @media ${theme.media.tablet} {
        display: block;
    }

    @media ${theme.media.mobile} {
        font-size: 32px;
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;

        @media ${theme.media.mobile} {
            align-items: flex-start;
            text-align: left;
            gap: unset;
            padding: 16px;
            
            ul + ul {
                margin: 0 auto;
            }
        }
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 22px;
    right: 22px;
    width: 24px;
    height: 24px;
    z-index: 9999999;

    span {
        &::before {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.primaryOutline};
            position: absolute;
            transform: translateY(-5px);
            transition: transform 0.3s ease;

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
            right: 0;
            transform: translateY(4px);
            transition: transform 0.3s ease, width 0.2s ease;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 24px;
            `}
        }
    }

    @media ${theme.media.tablet} {
        top: 16px;
    }
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    @media ${theme.media.tablet} {
        align-items: center;
    }

    @media ${theme.media.mobile} {
        display: block;
        align-items: flex-start;
        margin-top: 96px;
        
        li {
            padding: 0;
            margin-bottom: 32px;
        }
    }
`

const StyledSocialList = styled(SocialList)`
    @media ${theme.media.mobile} {
        height: 64px;
    }
`

const ListItem = styled.li`
    position: relative;
`

const StyledContactBtn = styled(ContactBtn)`
    font-size: 24px;
    max-width: 300px;
    margin-bottom: 20px;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`

const StyledCVBtn = styled(CVBtn)`
    font-size: 24px;
    max-width: 300px;
    margin-bottom: 20px;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`

const HeaderLink = styled(Link)`
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
    
    @media ${theme.media.tablet} {
        &:hover {
            color: ${theme.colors.primaryLightText};

            span {
                font-weight: inherit;
            }

            &::after {
                display: none;
            }
        }
    }

    @media ${theme.media.mobile} {
        padding: 0;
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
    
    @media ${theme.media.tablet} {
        margin-left: 14px;
        width: fit-content;
    }

    @media ${theme.media.mobile} {
        margin-left: unset;
    }
`