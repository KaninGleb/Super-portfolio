import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {Paragraph} from "../../../components/Paragraph.tsx";
import {Link} from "../../../components/Link.tsx";
import {Photo} from "../../../components/Photo.tsx";
import aboutMePhoto from "../../../assets/images/about-me-photo.png";

const text = {
    aboutMeText: 'Hello, I’m Elias!\n\n' +
        'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.\n\n' +
        'Transforming my creativity and knowledge into websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.',
}

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper gap='166px'>
                    <LeftSection>
                        <StyledSectionTitle>
                            <SectionTitle><span>#</span>about-me</SectionTitle>
                            <DecorativeLine width={'326px'} height={'2px'}/>
                        </StyledSectionTitle>
                        <Paragraph children={text.aboutMeText}/>
                        <Link href={'#'} children={'Read more ->'} mWidth={'150px'}/>
                    </LeftSection>
                    <RightSection>
                        <Photo src={aboutMePhoto} width='339px' height='507px' alt=""/>
                        <StyledBorder/>
                    </RightSection>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    max-height: 508px;
    height: 100%;
    margin-bottom: 112px;
`

const LeftSection = styled.div`
    p {
        margin-bottom: 35px;
    }
`

const StyledSectionTitle = styled(FlexWrapper)`
    max-width: 516px;
    width: 100%;
    margin-bottom: 23px;
`

const RightSection = styled.div`
    
`

const StyledBorder = styled.div`
    width: 271px;
    height: 1px;
    background-color: ${theme.colors.secondaryBorder};
    margin-left: 45px;
`;