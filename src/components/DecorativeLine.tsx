import styled, {keyframes} from "styled-components";
import {theme} from "../styles/Theme.tsx";

type DecorativeLinePropsType = {
    width: string
    height: string
    bgColor?: string
    marginL?: string
}

export const pulseLineAnimation = keyframes`
    0% {
        background-color: ${theme.colors.primaryLightAnim};
    }
    50% {
        background-color: ${theme.colors.primaryAnim};
    }
    100% {
        background-color: ${theme.colors.primaryLightAnim};
    }
`;

export const DecorativeLine = (props: DecorativeLinePropsType) => {
    return (
        <LineContainer width={props.width} height={props.height} bgColor={props.bgColor} marginL={props.marginL}/>
    );
};

const LineContainer = styled.div<DecorativeLinePropsType>`
    display: flex;
    align-items: center;
    
    &:after {
        content: '';
        width: ${props => props.width};
        height: ${props => props.height};
        background-color: ${props => props.bgColor || theme.colors.secondaryOutline};
        animation: ${pulseLineAnimation} 2s infinite;
        margin-left: ${props => props.marginL || '16px'};
    }
`;
