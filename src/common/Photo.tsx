import styled from "styled-components";

type PhotoPropsType = {
    Wmin?: number
    Wmax?: number
    src: string
    alt: string
}

export const Photo = (props: PhotoPropsType) => {
    return (
        <>
            <link rel="preload" href={props.src} as="image" />
            <StyledPhoto Wmin={props.Wmin} Wmax={props.Wmax} src={props.src} alt={props.alt} />
        </>
    )
}

export const StyledPhoto = styled.img<PhotoPropsType>`
    display: block;
    width: clamp(${props => props.Wmin}px,
    calc((100vw - 360px) / (1024 - 360) * (${props => props.Wmax} - ${props => props.Wmin}) + ${props => props.Wmin}px),
    ${props => props.Wmax}px);
    object-fit: cover;
    height: auto;
    z-index: 1;
`