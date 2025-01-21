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
import dots1 from "../../../assets/images/about-me-photo-pseudo/pseudo-1.svg";
import dots2 from "../../../assets/images/about-me-photo-pseudo/pseudo-2.svg";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                        <StyledSectionTitle>
                            <SectionTitle section={sectionsData.aboutMe}/>
                        </StyledSectionTitle>
                <StyledFlexWrapper gap='166px'>
                    <LeftSection>
                        <Paragraph children={textData.aboutMe.paragraph1}/>
                        <Paragraph children={textData.aboutMe.paragraph2}/>
                        <Paragraph children={textData.aboutMe.paragraph3}/>
                        <Link href={'#'} children={'Read more ->'} mWidth={'148px'}/>
                    </LeftSection>
                    <RightSection>
                        <StyledPhoto src={aboutMePhoto} Wmax={338} Wmin={250} alt="About Me Photo"/>
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

const StyledSectionTitle = styled(FlexWrapper)`
    margin-bottom: 22px;

    @media ${theme.media.tablet} {
        margin-bottom: unset;
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
    
    // &::before {
    //     content: "";
    //     position: absolute;
    //     background-image: url("${dots2}");
    //     background-size: contain;
    //     background-repeat: no-repeat;
    //     top: 0px;
    //     left: 0px;
    //
    //     width: 84px;
    //     height: 84px;
    //     box-shadow: 0 0 5px rgba(199, 120, 221, 1);
    //     animation: ${pulseAnimation} 2s infinite;
    //     transform: translateX(-50%);
    //     z-index: 999;
    // }
    //
    // &::after {
    //     content: "";
    //     position: absolute;
    //     background-image: url("${dots1}");
    //     background-size: contain;
    //     background-repeat: no-repeat;
    //     top: 0px;
    //     left: 0px;
    //
    //     width: 84px;
    //     height: 84px;
    //     box-shadow: 0 0 5px rgba(199, 120, 221, 1);
    //     animation: ${pulseAnimation} 2s infinite;
    //     transform: translateX(-50%);
    //     z-index: 999;
    // }
    
    @media ${theme.media.tablet} {
        
    }
`