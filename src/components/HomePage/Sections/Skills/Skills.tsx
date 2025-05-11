import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {theme} from "../../../../styles/Theme.tsx";
import {Container} from "../../../../common/Layout/Container.tsx";
import {FlexWrapper} from "../../../../common/Layout/FlexWrapper.tsx";
import {SectionTitle} from "../../../../common/Layout/SectionTitle.tsx";
import {sectionsTitlesData, skillsData} from "../../../../app/appData.ts";
import {Skill} from "./Skill/Skill.tsx";
import {Photo} from "../../../../common/Photo.tsx";
import {imagePulseAnimation} from "../../../../styles/animations/animations.ts";
import groupOfImages from "../../../../assets/images/section-images/skills/skills-images-group.svg"

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle section={sectionsTitlesData.homePage.skills}/>
                <StyledFlexWrapper gap='59px'>
                    <Fade direction={'left'}>
                        <StyledPhoto src={groupOfImages} Wmin={350} Wmax={350} alt="Group of Images"/>
                    </Fade>
                    <Fade direction={'right'}>
                        <SkillsWrapper direction='column' wrap='wrap-reverse' gap='16px'>
                            {skillsData.map((skill) => (
                                <Skill
                                    key={skill.title}
                                    order={skill.order}
                                    title={skill.title}
                                    description={skill.description}
                                    maxWidth={skill.maxWidth}
                                />
                            ))}
                        </SkillsWrapper>
                    </Fade>
                </StyledFlexWrapper>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    margin-bottom: 112px;
    padding-bottom: 2px;
    overflow: hidden;

    @media ${theme.media.width1044} {
        margin-bottom: 70px;
        padding-bottom: 2px;
    }
`

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.width1044} {
        justify-content: flex-end;
        gap: 0;
    }
`

const SkillsWrapper = styled(FlexWrapper)`
    margin-top: 42px;
    max-height: 282px;

    @media ${theme.media.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 25px;
        max-height: unset;
        
        & > div:nth-child(1) { order: 1; }
        & > div:nth-child(4) { order: 2; }
        & > div:nth-child(3) { order: 3; }
        & > div:nth-child(2) { order: 4; }
        & > div:nth-child(5) { order: 5; }
    }
`

const StyledPhoto = styled(Photo)`
    margin-top: 12px;
    margin-left: 32px;
    object-fit: contain;
    animation: ${imagePulseAnimation} 2s infinite;
    
    @media ${theme.media.width1044} {
        display: none;
    }
`