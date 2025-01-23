import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {sectionsData, skillsData} from "../../data/appData.ts";
import {Skill} from "../homePage/sections/skills/skill/Skill.tsx";

export const SkillsAboutMe = () => {
    return (
        <StyledSkillsAboutMe>
            <Container>
                <SectionTitle section={sectionsData.aboutMePage.skills}/>
                <SkillsWrapper gap='16px'>
                    {skillsData.map((skill, index) => (
                        <Skill
                            key={index}
                            title={skill.title}
                            description={skill.description}
                            maxWidth={skill.maxWidth}
                        />
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