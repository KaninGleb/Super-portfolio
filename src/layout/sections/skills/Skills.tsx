import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Skill} from "../skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>
                <h2><span>#</span>skills</h2>
                <Icon iconId='line' width='239' height='2' viewBox='0 0 239 2'/>
            </SectionTitle>
            <FlexWrapper justify='flex-end' wrap='wrap' gap='16px'>
                <Skill title='Languages' description={['TypeScript', 'Lua', 'Python', 'JavaScript']}/>
                <Skill title='Databases' description={['SQLite', 'PostgreSQL', 'Mongo']}/>
                <Skill title='Tools' description={['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome']}/>
                <Skill title='Frameworks' description={['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js']}/>
                <Skill title='Markup' description={['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja']}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #282c33;
`