import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Photo} from "../../components/Photo.tsx";
import {Paragraph} from "../../components/Paragraph.tsx";
import {textData} from "../../data/appData.ts";
import {imagePulseAnimation, pulseAnimation} from "../../animations/animations.ts";
import aboutMePhoto from "../../assets/images/about-me-photo.png"
import bothPseudo from "../../assets/images/about-me-photo-pseudo/both-pseudo.svg";
import bgLeft from "../../assets/images/background/about-me-page/about-me-page-bg-pseudo-left.svg"
import bgRight from "../../assets/images/background/about-me-page/about-me-page-bg-pseudo-right.svg"

export const AboutMeForPage = () => {
    return (
        <StyledAboutMeForPage>
            <Container>
                <StyledFlexWrapper gap='166px'>
                    <LeftSection>
                        <Paragraph children={textData.aboutMe.paragraph1}/>
                        <Paragraph children={textData.aboutMe.paragraph2}/>
                        <Paragraph children={textData.aboutMe.paragraph3}/>
                    </LeftSection>
                    <RightSection>
                        <StyledPhoto src={aboutMePhoto} Wmax={338} Wmin={250} alt="About Me Photo"/>
                    </RightSection>
                </StyledFlexWrapper>
            </Container>
        </StyledAboutMeForPage>
    )
}

const StyledAboutMeForPage = styled.section`
    margin-bottom: 42px;
    position: relative;
    overflow-x: clip;

    &::before {
        content: "";
        background-image: url("${bgLeft}");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 202px;
        left: 0;
        width: 160px;
        height: 976px;
        animation: ${imagePulseAnimation} 2s infinite;
    }

    &::after {
        content: "";
        background-image: url("${bgRight}");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        right: -90px;
        width: 170px;
        height: 1240px;
        animation: ${imagePulseAnimation} 2s infinite;
    }

    @media ${theme.media.bgPseudoOff} {
        &::before, &::after {
            display: none;
        }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    p {
        margin-bottom: 28px;
    }
`

const RightSection = styled.div`
    position: relative;
    height: fit-content;
    transform: translateY(-70px);

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

    &::before {
        content: "";
        position: absolute;
            background-image: url("${bothPseudo}");
        background-size: contain;
        background-repeat: no-repeat;
        top: 60px;
        left: -5px;

        width: clamp(250px, calc((100vw - 328px) * (328 - 250) / (1024 - 328) + 250px), 328px);
        height: 276px;
        animation: ${imagePulseAnimation} 2s infinite;
        z-index: 999;
    }
    
    @media ${theme.media.tablet} {
        margin: 0 auto;
        transform: translateY(0px);
    }

    @media ${theme.media.mobile} {
        &::after {
            width: 220px;
            transform: translateX(-45%);
        }
    }
`

const StyledPhoto = styled(Photo)`
    display: block;
    position: relative;
    
    @media ${theme.media.tablet} {
        
    }
`