import styled from "styled-components";

type DecorativeLinePropsType = {
    width: string
    height: string
}

export const DecorativeLine = (props: DecorativeLinePropsType) => {
    return (
        <LineContainer width={props.width} height={props.height}/>
    );
};

const LineContainer = styled.div<DecorativeLinePropsType>`
    display: flex;
    align-items: center;
    margin-left: 16px;
    
    &:after {
        content: '';
        width: ${props => props.width};
        height: ${props => props.height};
        background-color: #c778dd;
    }
`;
