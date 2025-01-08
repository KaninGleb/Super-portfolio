import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type ParagraphPropsType = {
    children: string
    fontWidth?: string
}

export const Paragraph = (props: ParagraphPropsType) => {
    return (
        <StyledParagraph fontWidth={props.fontWidth}>
            {props.children.split('\n').map((text, index) => (
                <span key={index}>{text}<br/></span>
            ))}
        </StyledParagraph>
    );
};

const StyledParagraph = styled.p<{fontWidth?: string}>`
    line-height: 1.625;
    font-weight: ${props => props.fontWidth || '400'};
    color: ${theme.colors.primaryLightText};
`