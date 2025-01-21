import styled, {css} from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {shakeAnimation} from "../../animations/animations.ts";
import {theme} from "../../styles/Theme.tsx";

type LogoPropsType = {
    isOpen?: boolean
}

export const Logo = ({ isOpen = false }: LogoPropsType) => {
    return (
        <StyledLink isOpen={isOpen} href="">
            <Icon iconId='defaultLogo' width='16px' height='17px'/>
            <span>Elias</span>
        </StyledLink>
    )
}

const StyledLink = styled.a<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    transition: .2s;
    
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
        animation: ${shakeAnimation} 0.5s ease-in-out;
    }
    
    ${props => props.isOpen && css`
        @media ${theme.media.tablet} {
            position: absolute;
            top: 18px;
            left: 16px;
        }
    `}
`