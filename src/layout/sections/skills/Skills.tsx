import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {sectionsData} from "../../../data/appData.ts";
import {Skill} from "./skill/Skill.tsx";
import {Photo} from "../../../components/Photo.tsx";
import groupOfImages from "../../../assets/images/skills/skills-group.svg"
import {imagePulseAnimation} from "../../../animations/animations.ts";
import {theme} from "../../../styles/Theme.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper>
                    <SectionTitle section={sectionsData.skills}/>
                </FlexWrapper>

                <StyledFlexWrapper gap='59px'>
                    <StyledPhoto src={groupOfImages} alt="Group of Images"/>
                        <SkillsWrapper direction='column' wrap='wrap-reverse' gap='16px'>
                            <Skill order={5}
                                    title='Languages'
                                    description={['TypeScript', 'Lua', 'Python', 'JavaScript']}/>
                            <Skill order={3}
                                    title='Databases'
                                    description={['SQLite', 'PostgreSQL', 'Mongo']}/>
                            <Skill order={1}
                                    title='Tools'
                                    maxWidth='196px'
                                    description={['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git Font Awesome']}/>
                            <Skill order={4}
                                    title='Other'
                                    description={['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja']}/>
                            <Skill order={2}
                                    title='Frameworks'
                                    maxWidth='196px'
                                    description={['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js']}/>
                        </SkillsWrapper>
                </StyledFlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    margin-bottom: 112px;

    @media ${theme.media.width1044} {
        margin-bottom: 70px;
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
    width: 390px;
    object-fit: contain;
    animation: ${imagePulseAnimation} 2s infinite;
    
    @media ${theme.media.width1044} {
        display: none;
    }
`