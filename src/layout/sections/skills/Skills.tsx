import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper>
                <SectionTitle><span>#</span>skills</SectionTitle>
                <DecorativeLine width={'239px'} height={'2px'}/>
                {/*<Icon iconId='skillsLine' width='239' height='2' viewBox='0 0 239 2'/>*/}
            </FlexWrapper>

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
    background-color: #7e3f3e;
`