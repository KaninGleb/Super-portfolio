import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {Photo} from "../../../components/Photo.tsx";
import aboutMePhoto from "../../../assets/images/about-me-photo.png";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Paragraph} from "../../../components/Paragraph.tsx";

const text = {
    aboutMeText: 'Hello, i’m Elias! ' +
        'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. ' +
        'Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.',
}

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <FlexWrapper>
                <SectionTitle><span>#</span>about-me</SectionTitle>
                <DecorativeLine width={'326px'} height={'2px'}/>
            </FlexWrapper>

            <FlexWrapper>
                <FlexWrapper>
                    <Paragraph children={text.aboutMeText}/>
                </FlexWrapper>

                <Photo src={aboutMePhoto} width='339px' height='507px' alt=""/>
            </FlexWrapper>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    background-color: #425293;
`