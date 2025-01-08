import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {Paragraph} from "../../../components/Paragraph.tsx";
import {Photo} from "../../../components/Photo.tsx";
import aboutMePhoto from "../../../assets/images/about-me-photo.png";
import {theme} from "../../../styles/Theme.tsx";

const text = {
    aboutMeText: 'Hello, i’m Elias! ' +
        'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. ' +
        'Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.',
}

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper>
                    <SectionTitle><span>#</span>about-me</SectionTitle>
                    <DecorativeLine width={'326px'} height={'2px'}/>
                </FlexWrapper>

                <FlexWrapper>
                    <FlexWrapper>
                        <Paragraph children={text.aboutMeText}/>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'}>
                        <Photo src={aboutMePhoto} width='339px' height='507px' alt=""/>
                        <StyledBorder/>
                    </FlexWrapper>

                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    background-color: #425293;
`

const StyledBorder = styled.div`
    width: 271px;
    height: 1px;
    background-color: ${theme.colors.secondaryBorder};
    margin-left: 45px;
`;