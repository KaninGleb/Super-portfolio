import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";

export const Projects = () => {
    return (
        <StyledProjects>
            <FlexWrapper align='center' gap='16px'>
                <SectionTitle><span>#</span>projects</SectionTitle>
                <Icon iconId="projectsLine" width='511' height='2' viewBox='0 0 511 2'/>
                <button>View all ~~&gt;</button>
            </FlexWrapper>

            <FlexWrapper>
                <Project title={'ChertNodes'} text={'Minecraft servers hosting '}/>
                <Project title={'ProtectX'} text={'Discord anti-crash bot'}/>
                <Project title={'Kahoot Answers Viewer'} text={'Get answers to your kahoot quiz'}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #fdfda7;
`