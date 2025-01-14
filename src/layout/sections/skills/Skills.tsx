import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {sectionsData} from "../../../data/appData.ts";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Photo} from "../../../components/Photo.tsx";
import groupOfImages from "../../../assets/images/skills/skills-group.svg"
import {pulseAnimation} from "../../../animations/animations.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper>
                    <SectionTitle section={sectionsData.skills}/>
                    <DecorativeLine width={'239px'} height={'2px'}/>
                </FlexWrapper>

                <FlexWrapper gap='59px'>
                    <StyledPhoto src={groupOfImages} width='348px' height='282px' alt="Group of Images"/>
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
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    max-height: 365px;
    height: 100%;
    margin-bottom: 112px;
`

const SkillsWrapper = styled(FlexWrapper)`
    margin-top: 43px;
    max-height: 282px;
`

const StyledPhoto = styled(Photo)`
    margin-top: 12px;
    margin-left: 32px;
    animation: ${pulseAnimation} 2s infinite;
`