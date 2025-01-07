import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {Project} from "./project/Project.tsx";
import chertNodes from '../../../assets/images/projects/project-1.svg'
import protectX from '../../../assets/images/projects/project-2.svg'
import kahoot from '../../../assets/images/projects/project-3.svg'
import {theme} from "../../../styles/Theme.tsx";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper align='center' gap='16px'>
                    <SectionTitle><span>#</span>projects</SectionTitle>
                    <DecorativeLine width={'511px'} height={'2px'}/>
                    <button>View all ~~&gt;</button>
                </FlexWrapper>

                <FlexWrapper justify='space-around'>
                    <Project software={'HTML SCSS Python Flask'}
                                title={'ChertNodes'}
                                text={'Minecraft servers hosting'}
                                src={chertNodes}
                                links={[theme.links.primaryLink, theme.links.secondaryLink]}/>
                    <Project software={'React Express Discord.js Node.js HTML SCSS Python Flask'}
                                title={'ProtectX'}
                                text={'Discord anti-crash bot'}
                                src={protectX}
                                links={[theme.links.primaryLink]}/>
                    <Project software={'CSS Express Node.js'}
                                title={'Kahoot Answers Viewer'}
                                text={'Get answers to your kahoot quiz'}
                                src={kahoot}
                                links={[theme.links.primaryLink]}/>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    max-height: 518px;
    height: 100%;
    background-color: #5f8881;
`