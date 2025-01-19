import styled from "styled-components";

type PhotoPropsType = {
    Wmin?: number
    Wmax?: number
}

export const Photo = styled.img<PhotoPropsType>`
    display: block;
    //width: ${props => props.width};
    width: clamp(${props => props.Wmin}px,
    calc((100vw - 360px) / (1024 - 360) * (${props => props.Wmax} - ${props => props.Wmin}) + ${props => props.Wmin}px),
    ${props => props.Wmax}px);
    object-fit: cover;
    z-index: 1;
`

// {width: clamp(${props => props.Wmin}px,
//     calc((100vw - 375px) / (1024 - 375) * (${props => props.Wmax} - ${props => props.Wmin}) + ${props => props.Wmin}px),
//     ${props => props.Wmax}px);