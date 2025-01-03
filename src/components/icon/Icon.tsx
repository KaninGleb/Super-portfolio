import sprite from '../../assets/images/icons-sprite.svg'
// import styled from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "52"} height={props.height || "52"} viewBox={props.viewBox || "0 0 52 52"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </svg>
    );
};

// const StyledSvg = styled.svg`
//     background-color: black;
// `
