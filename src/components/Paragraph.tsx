import React from "react";
import styled from "styled-components";

type ParagraphPropsType = {
    children: React.ReactNode;
}

export const Paragraph = (props: ParagraphPropsType) => {
    return (
        <StyledParagraph>{props.children}</StyledParagraph>
    );
};

const StyledParagraph = styled.p`
    
`