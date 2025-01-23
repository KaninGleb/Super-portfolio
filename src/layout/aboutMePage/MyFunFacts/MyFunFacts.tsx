import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {factsData, sectionsData} from "../../../data/appData.ts";
import {Fact} from "./Fact/Fact.tsx";
import {Photo} from "../../../components/Photo.tsx";
import image from "../../../assets/images/my-fun-facts-image.svg";
import {imagePulseAnimation} from "../../../animations/animations.ts";

export const MyFunFacts = () => {
    return (
        <StyledMyFunFacts>
            <Container>
                <SectionTitle section={sectionsData.aboutMePage.myFunFacts}/>
                <SectionWrapper gap={'136px'}>
                    <FactsSection>
                        {factsData.map((fact, index) => (
                            <Fact key={index} fact={fact.fact}/>
                        ))}
                    </FactsSection>
                    <PhotoSection>
                        <StyledPhoto src={image} Wmin={150} Wmax={202} alt={'My fan facts image'}/>
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

const PhotoSection = styled.div`
    transform: translateY(-30px);
    
    @media ${theme.media.width1044} {
        display: none;
    }
`

const StyledPhoto = styled(Photo)`
    animation: ${imagePulseAnimation} 2s infinite;
`