import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {sectionsTitlesData, skillsData} from "../../app/appData.ts";
import {Skill} from "../homePage/sections/skills/skill/Skill.tsx";

export const SkillsAboutMe = () => {
    return (
        <StyledSkillsAboutMe>
            <Container>
                <SectionTitle section={sectionsTitlesData.aboutMePage.skills}/>
                <SkillsWrapper gap='16px'>
                    {skillsData.map((skill, index) => (
                        <FadeWrapper key={index} delay={index * 200} direction={'up'} duration={600}>
                            <Skill
                                title={skill.title}
                                description={skill.description}
                                maxWidth={skill.maxWidth}
                            />
                        </FadeWrapper>
                    ))}
                </SkillsWrapper>
            </Container>
        </StyledSkillsAboutMe>
    )
}

const StyledSkillsAboutMe = styled.section`
    margin-bottom: 84px;

    @media ${theme.media.width1044} {
        margin-bottom: 70px;
    }
`

const SkillsWrapper = styled(FlexWrapper)`
    margin-top: 48px;

    @media ${theme.media.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 25px;
        max-height: unset;
    }
`

const FadeWrapper = styled(Fade)`
    display: flex;
    flex-grow: 1;
    
    @media (min-width: 1024px) {
        flex-grow: unset;
    }
`