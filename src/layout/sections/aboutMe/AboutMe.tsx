import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {sectionsData, textData} from "../../../data/appData.ts";
import {Paragraph} from "../../../components/Paragraph.tsx";
import aboutMePhoto from "../../../assets/images/about-me-photo.png";
import {Link} from "../../../components/Link.tsx";
import {Photo} from "../../../components/Photo.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {pulseAnimation} from "../../../animations/animations.ts";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <StyledFlexWrapper gap='166px'>
                    <LeftSection>
                        <StyledSectionTitle>
                            <SectionTitle section={sectionsData.aboutMe}/>
                        </StyledSectionTitle>
                        <TabletPhotoWrapper>
                            <TabletStyledPhoto src={aboutMePhoto} Wmax={338} Wmin={200} alt="About Me Photo"/>
                        </TabletPhotoWrapper>
                        <Paragraph children={textData.aboutMe.paragraph1}/>
                        <Paragraph children={textData.aboutMe.paragraph2}/>
                        <Paragraph children={textData.aboutMe.paragraph3}/>
                        <Link href={'#'} children={'Read more ->'} mWidth={'148px'}/>
                    </LeftSection>
                    <RightSection>
                        <StyledPhoto src={aboutMePhoto} Wmax={338} alt="About Me Photo"/>
                    </RightSection>
                </StyledFlexWrapper>
            </Container>
        </StyledAboutMe>
    )
}

const StyledAboutMe = styled.section`
    margin-bottom: 112px;
    
    @media ${theme.media.tablet} {
        margin-bottom: 70px;
    }
`

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.width1044} {
        gap: 80px
    }

    @media ${theme.media.tablet} {
        flex-wrap: wrap-reverse;
        gap: 30px;
    }
`

const LeftSection = styled.div`
    p {
        margin-bottom: 27px;
    }
`

// const StyledSectionTitle = styled(SectionTitle)`
//     //margin-bottom: 23px;
// `

const StyledSectionTitle = styled(FlexWrapper)`
    max-width: 516px;
    width: 100%;
    margin-bottom: 22px;
    
    @media ${theme.media.tablet} {
        margin-bottom: unset;
    }
`

const TabletPhotoWrapper = styled.div`
    display: none;
    position: relative;
    height: fit-content;

    &::after {
        content: '';
        display: inline-block;
        height: 2px;
        max-width: 270px;
        width: 100%;
        background-color: ${theme.colors.secondaryOutline};
        box-shadow: 0 0 5px rgba(199, 120, 221, 1);
        animation: ${pulseAnimation} 2s infinite;
        z-index: 1;

        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media ${theme.media.tablet} {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }
    
    @media ${theme.media.mobile} {
        &::after {
            max-width: 200px;
            width: 100%;
        }
    }
`

const TabletStyledPhoto = styled(Photo)`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`

const RightSection = styled.div`
    position: relative;
    height: fit-content;

    &::after {
        content: '';
        display: inline-block;
        height: 2px;
        width: 270px;
        background-color: ${theme.colors.secondaryOutline};
        box-shadow: 0 0 5px rgba(199, 120, 221, 1);
        animation: ${pulseAnimation} 2s infinite;
        
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }
    
    @media ${theme.media.tablet} {
        display: none;
    }
`

const StyledPhoto = styled(Photo)`
    display: block;

    @media ${theme.media.tablet} {
        display: none;
    }
`