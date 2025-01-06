import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Photo} from "../../../components/Photo.tsx";
import groupOfImages from "../../../assets/images/skills/skills-group.svg"

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper>
                <SectionTitle><span>#</span>skills</SectionTitle>
                <DecorativeLine width={'239px'} height={'2px'}/>
                {/*<Icon iconId='skillsLine' width='239' height='2' viewBox='0 0 239 2'/>*/}
            </FlexWrapper>

            <FlexWrapper gap='59px'>
                <StyledPhoto src={groupOfImages} width='349px' height='282px' alt="Group of Images"/>
                <SkillsWrapper>
                    <FlexWrapper justify='flex-end' wrap='wrap' gap='16px'>
                        <Skill title='Languages'
                                description={['TypeScript', 'Lua', 'Python', 'JavaScript']}/>
                        <Skill title='Databases'
                                description={['SQLite', 'PostgreSQL', 'Mongo']}/>
                        <Skill title='Tools'
                                maxWidth='196px'
                                description={['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome']}/>
                        <Skill title='Other'
                                description={['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja']}/>
                        <Skill title='Frameworks'
                                maxWidth='196px'
                                description={['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js']}/>
                    </FlexWrapper>
                </SkillsWrapper>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    height: 365px;
    background-color: #7e3f3e;
`

const SkillsWrapper = styled.div`

`

const StyledPhoto = styled(Photo)`
    margin-top: 12px;
    margin-left: 32px;
`