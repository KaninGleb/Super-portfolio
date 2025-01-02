import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

export const Logo = () => {
    return (
        <StyledLink href="">
            <Icon iconId='defaultLogo'/>
            <span>Elias</span>
        </StyledLink>
    );
};

const StyledLink = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    
    img {
        width: 16px;
        height: 16px;
    }
`