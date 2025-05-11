import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {Link} from "react-router-dom";
import {theme} from "../../../styles/Theme.tsx";
import {LanguageSwitcher} from '../../../components/LanguageSwitcher.tsx';

type RouterHeaderMenuPropsType = {
    menuItems: Array<{ symbol: string, name: string, id: string }>
}

export const RouterHeaderMenu = (props: RouterHeaderMenuPropsType) => {
    return (
        <StyledRouterHeaderMenu>
            <StyledUl>
                {props.menuItems.map((item, index) => (
                    <ListItem key={index}>
                        <Fade delay={index * 100} direction={'down'}>
                            <HeaderLink to={`/${item.id}`}>
                                <span>{item.symbol}</span>{item.name}
                            </HeaderLink>
                        </Fade>
                    </ListItem>
                ))}
                <ListItem>
                    <Fade delay={props.menuItems.length * 100} direction={'down'}>
                        {/*<LanguageSelect aria-label='Language change'>*/}
                        {/*    <option>EN</option>*/}
                        {/*    <option>RU</option>*/}
                        {/*</LanguageSelect>*/}
                        <LanguageSwitcher/>
                    </Fade>
                </ListItem>
            </StyledUl>
        </StyledRouterHeaderMenu>
    )
}

const StyledRouterHeaderMenu = styled.nav`
    @media ${theme.media.tablet} {
        display: none;
    }
`

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 32px;
`

const ListItem = styled.li`
    position: relative;
`

const HeaderLink = styled(Link)`
    display: inline-block;
    position: relative;
    transition: color 0.3s ease;
    padding: 12px 0;
    
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
            
            @media ${theme.media.tablet} {
                transform: scaleX(0);
            }
        }
    }
`