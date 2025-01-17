import styled from "styled-components";

type PhotoPropsType = {
    width: string
}

export const Photo = styled.img<PhotoPropsType>`
    display: block;
    width: ${props => props.width};
    object-fit: cover;
`

// {width: clamp(${props => props.Wmin}px,
//     calc((100vw - 375px) / (1024 - 375) * (${props => props.Wmax} - ${props => props.Wmin}) + ${props => props.Wmin}px),
//     ${props => props.Wmax}px);