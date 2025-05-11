import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type ParagraphPropsType = {
    children: string
    fontWeight?: string
    lineHeight?: string
    color?: string
}

export const Paragraph = (props: ParagraphPropsType) => {
    return (
        <StyledParagraph fontWeight={props.fontWeight} lineHeight={props.lineHeight}>
            {props.children}
        </StyledParagraph>
    )
}

const StyledParagraph = styled.p<ParagraphPropsType>`
    line-height: ${props => props.lineHeight || '1.625'};
    font-weight: ${props => props.fontWeight || '400'};
    color: ${props => props.color || theme.colors.primaryLightText};
`