import styled, {css} from "styled-components";
import {Fade} from "react-awesome-reveal";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Link, useLocation} from "react-router-dom";

type LogoPropsType = {
    isOpen?: boolean
}

export const Logo = ({ isOpen = false }: LogoPropsType) => {
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === "/") {
            window.location.reload();
        }
    };

    return (
        <StyledLink to={"/"} isOpen={isOpen} onClick={handleClick}>
            <FadeIconWrap direction={'left'} duration={400} delay={200}>
                <Icon iconId='defaultLogo' width='16px' height='17px'/>
            </FadeIconWrap>
            <Fade direction={'down'} duration={400}>
                <span>Elias</span>
            </Fade>
        </StyledLink>
    )
}

const StyledLink = styled(Link)<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    transition: .2s ease;
    
    img {
        width: 16px;
        height: 16px;
    }
    
    span {
        font-family: "Fira Code", sans-serif;
        font-weight: 500;
        font-size: 16px;
        color: #fff;
    }
    
    &:hover {
        transform: translateY(-3px);
    }
    
    ${props => props.isOpen && css`
        @media ${theme.media.tablet} {
            position: absolute;
            top: 18px;
            left: 16px;
        }
    `}
`

const FadeIconWrap = styled(Fade)`
    display: flex;
`