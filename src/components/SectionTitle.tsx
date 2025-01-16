import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {pulseAnimation} from "../animations/animations.ts";

type SectionTitlePropsType = {
    section: {
        id: string
        name: string
        symbol: string
    }
    lineW: string
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle id={props.section.id} lineW={props.lineW}>
            <span>{props.section.symbol}</span>{props.section.name}
        </StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.h2<{lineW: string}>`
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: 32px;
    color: #fff;
    position: relative;
    scroll-margin-top: 75px;
    
    span {
        color: #c778dd;
    }
    
    &::after {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.secondaryOutline};
        
        position: absolute;
        top: 50%;
        left: 110%;
        width: ${props => props.lineW};

        animation: ${pulseAnimation} 2s infinite;
        box-shadow: 0 0 5px rgba(199, 120, 221, 1);
    }
`