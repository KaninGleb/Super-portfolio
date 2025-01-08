import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {Project} from "./project/Project.tsx";
import chertNodes from '../../../assets/images/projects/project-1.svg'
import protectX from '../../../assets/images/projects/project-2.svg'
import kahoot from '../../../assets/images/projects/project-3.svg'

const projects = {
    chertNodes: {
        software: ['HTML', 'SCSS', 'Python', 'Flask'],
        title: 'ChertNodes',
        text: 'Minecraft servers hosting',
        src: chertNodes,
        links: [
            {href: "#", children: "Live <~>", color: "#ffffff"},
            {href: "#", children: "Cached >=", color: "#abb2bf", borderColor: "#abb2bf"},
        ],
    },
    protectX: {
        software: ['React', 'Express', 'Discord.js', 'Node.js', 'HTML', 'SCSS', 'Python', 'Flask'],
        title: 'ProtectX',
        text: 'Discord anti-crash bot',
        src: protectX,
        links: [
            {href: "#", children: "Live <~>", color: "#ffffff"},
        ],
    },
    kahoot: {
        software: ['CSS', 'Express', 'Node.js'],
        title: 'Kahoot Answers Viewer',
        text: 'Get answers to your kahoot quiz',
        src: kahoot,
        links: [
            {href: "#", children: "Live <~>", color: "#ffffff"},
        ],
    },
};

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper direction='column' gap='48px'>
                    <FlexWrapper justify='space-between' align='center' gap='16px'>
                        <FlexWrapper>
                            <SectionTitle><span>#</span>projects</SectionTitle>
                            <DecorativeLine width={'511px'} height={'2px'}/>
                        </FlexWrapper>
                        <ProjectsLink href="#">View all ~~&gt;</ProjectsLink>
                    </FlexWrapper>

                    <FlexWrapper justify='space-between' gap='16px'>
                        {Object.values(projects).map((project, index) => (
                            <Project
                                key={index}
                                software={project.software}
                                title={project.title}
                                text={project.text}
                                src={project.src}
                                links={project.links}
                            />
                        ))}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    max-height: 518px;
    height: 100%;
    margin-bottom: 106px;
`

const ProjectsLink = styled.a`
    font-weight: 500;
`