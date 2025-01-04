import styled from "styled-components";

type PhotoPropsType = {
    width: string
    height: string
}

export const Photo = styled.img<PhotoPropsType>`
    width: ${props => props.width}
    height: ${props => props.height}
    object-fit: cover;
`