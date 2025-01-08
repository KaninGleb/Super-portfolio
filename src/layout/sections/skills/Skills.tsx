import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Photo} from "../../../components/Photo.tsx";
import groupOfImages from "../../../assets/images/skills/skills-group.svg"

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper>
                    <SectionTitle><span>#</span>skills</SectionTitle>
                    <DecorativeLine width={'239px'} height={'2px'}/>
                </FlexWrapper>

                <FlexWrapper gap='54px'>
                    <StyledPhoto src={groupOfImages} width='349px' height='282px' alt="Group of Images"/>
                    <SkillsWrapper>
                        <FlexWrapper justify='flex-end' wrap='wrap' gap='16px'>
                            <Skill title='Languages'
                                    description={['TypeScript', 'Lua', 'Python', 'JavaScript']}/>
                            <Skill title='Databases'
                                    description={['SQLite', 'PostgreSQL', 'Mongo']}/>
                            <Skill title='Tools'
                                    maxWidth='198px'
                                    description={['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git Font Awesome']}/>
                            <Skill title='Other'
                                    description={['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja']}/>
                            <Skill title='Frameworks'
                                    maxWidth='198px'
                                    description={['React Vue', 'Disnake Discord.js', 'Flask Express.js']}/>
                        </FlexWrapper>
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

const SkillsWrapper = styled.div`

`

const StyledPhoto = styled(Photo)`
    margin-top: 12px;
    margin-left: 32px;
`