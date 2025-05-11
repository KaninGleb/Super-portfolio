import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../common/Layout/Container.tsx";
import {FlexWrapper} from "../../../common/Layout/FlexWrapper.tsx";
import {SectionTitle} from "../../../common/Layout/SectionTitle.tsx";
import {contentData, sectionsTitlesData} from '../../../app/appData.ts';
import {Fact} from "./Fact/Fact.tsx";
import {Photo} from "../../../common/Photo.tsx";
import {imagePulseAnimation} from "../../../styles/animations/animations.ts";
import image from "../../../assets/images/section-images/my-fun-facts/my-fun-facts-images-group.svg";

export const MyFunFacts = () => {
    return (
        <StyledMyFunFacts>
            <Container>
                <SectionTitle section={sectionsTitlesData.aboutMePage.myFunFacts}/>
                <SectionWrapper gap={'136px'}>
                    <FactsSection>
                        {contentData.aboutMePage.myFunFacts.map((fact, index) => (
                            <FadeWrapper key={index} delay={index * 100} direction={'up'} duration={600}>
                                <Fact key={index} fact={fact.fact}/>
                            </FadeWrapper>
                        ))}
                    </FactsSection>
                    <PhotoSection>
                        <Fade direction={'right'} duration={800}>
                            <StyledPhoto src={image} Wmin={150} Wmax={202} alt={'My fan facts image'}/>
                        </Fade>
                    </PhotoSection>
                </SectionWrapper>
            </Container>
        </StyledMyFunFacts>
    )
}

const StyledMyFunFacts = styled.section`
    h2 {
        margin-bottom: 26px;
    }
`

const SectionWrapper = styled(FlexWrapper)`
    margin-right: 80px;

    @media ${theme.media.width1044} {
        margin-right: unset;
    }
`

const FactsSection = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    gap: 16px;
`

const FadeWrapper = styled(Fade)`
    @media ${theme.media.tablet} {
        display: flex;
        flex-grow: 1;
    }
    
`

const PhotoSection = styled.div`
    transform: translateY(-30px);
    
    @media ${theme.media.width1044} {
        display: none;
    }
`

const StyledPhoto = styled(Photo)`
    animation: ${imagePulseAnimation} 2s infinite;
`