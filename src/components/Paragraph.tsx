import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const textData = {
    main: {
        paragraph: 'He crafts responsive websites where technologies meet creativity',
    },
    aboutMe: {
        paragraph1: 'Hello, I’m Elias!',
        paragraph2: 'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.',
        paragraph3: 'Transforming my creativity and knowledge into websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.',
    },
    contacts: {
        paragraph: 'I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me'
    },
}

type ParagraphPropsType = {
    children: string
    fontWeight?: string
}

export const Paragraph = (props: ParagraphPropsType) => {
    return (
        <StyledParagraph fontWeight={props.fontWeight}>
            {props.children}
        </StyledParagraph>
        // <StyledParagraph fontWeight={props.fontWeight}>
        //     {props.children.split('\n').map((text, index) => (
        //         <span key={index}>{text}<br/></span>
        //     ))}
        // </StyledParagraph>
    );
};

const StyledParagraph = styled.p<ParagraphPropsType>`
    line-height: 1.625;
    font-weight: ${props => props.fontWeight || '400'};
    color: ${theme.colors.primaryLightText};
`