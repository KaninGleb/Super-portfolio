import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {shakeAnimation} from "../../animations/animations.ts";

export const Logo = () => {
    return (
        <StyledLink href="">
            <Icon iconId='defaultLogo' width='16px' height='17px'/>
            <span>Elias</span>
        </StyledLink>
    );
};

const StyledLink = styled.a`
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
`