import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

type ParagraphPropsType = {
    children: string
}

export const Paragraph = (props: ParagraphPropsType) => {
    return (
        <StyledParagraph>
            {props.children.split('\n').map((line, index) => (
                <span key={index}>{line}<br/></span>
            ))}
        </StyledParagraph>
    );
};

const StyledParagraph = styled.p`
    line-height: 1.625;
    color: ${theme.colors.primaryLightText};
`