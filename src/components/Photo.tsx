import styled from "styled-components";

type PhotoPropsType = {
    width: string
    height: string
}

export const Photo = styled.img<PhotoPropsType>`
    max-width: ${props => props.width}
    max-height: ${props => props.height}
    width: 100%;
    height: 100%;
    object-fit: cover;
`