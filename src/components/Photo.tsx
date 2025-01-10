import styled from "styled-components";

type PhotoPropsType = {
    width: string
    height: string
}

export const Photo = styled.img<PhotoPropsType>`
    display: block;
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: cover;
`