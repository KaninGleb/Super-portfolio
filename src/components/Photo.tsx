import styled from "styled-components";

type PhotoPropsType = {
    width: string
    height: string
}

export const Photo = styled.img<PhotoPropsType>`
    display: block;
    max-width: ${props => props.width}
    max-height: ${props => props.height}
    width: 100%;
    object-fit: cover;
`