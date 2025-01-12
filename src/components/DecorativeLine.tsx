import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type DecorativeLinePropsType = {
    width: string
    height: string
    bgColor?: string
    marginL?: string
}

export const DecorativeLine = (props: DecorativeLinePropsType) => {
    return (
        <LineContainer width={props.width} height={props.height} bgColor={props.bgColor} marginL={props.marginL}/>
    );
};

const LineContainer = styled.div<DecorativeLinePropsType>`
    display: flex;
    align-items: center;
    margin-left: ${props => props.marginL || '16px'};
    
    &:after {
        content: '';
        width: ${props => props.width};
        height: ${props => props.height};
        background-color: ${props => props.bgColor || theme.colors.secondaryOutline};
    }
`;
