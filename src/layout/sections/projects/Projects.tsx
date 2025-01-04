import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import chertNodes from '../../../assets/images/projects/project-1.svg'
import protectX from '../../../assets/images/projects/project-2.svg'
import kahoot from '../../../assets/images/projects/project-3.svg'

export const Projects = () => {
    return (
        <StyledProjects>
            <FlexWrapper align='center' gap='16px'>
                <SectionTitle><span>#</span>projects</SectionTitle>
                <DecorativeLine width={'511px'} height={'2px'}/>
                {/*<Icon iconId="projectsLine" width='511' height='2' viewBox='0 0 511 2'/>*/}
                <button>View all ~~&gt;</button>
            </FlexWrapper>

            <FlexWrapper justify='space-around'>
                <Project software={'HTML SCSS Python Flask'}
                            title={'ChertNodes'}
                            text={'Minecraft servers hosting'}
                            src={chertNodes}/>
                <Project software={'React Express Discord.js Node.js HTML SCSS Python Flask'}
                            title={'ProtectX'}
                            text={'Discord anti-crash bot'}
                            src={protectX}/>
                <Project software={'CSS Express Node.js'}
                            title={'Kahoot Answers Viewer'}
                            text={'Get answers to your kahoot quiz'}
                            src={kahoot}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #fdfda7;
`