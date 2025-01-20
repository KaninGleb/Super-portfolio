import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {sectionsData} from "../../../data/appData.ts";
import {Project} from "./project/Project.tsx";
import chertNodes from '../../../assets/images/projects/project-1.svg'
import protectX from '../../../assets/images/projects/project-2.svg'
import kahoot from '../../../assets/images/projects/project-3.svg'
import {font} from "../../../styles/CommonFont.tsx";

const projects = {
    chertNodes: {
        software: ['HTML', 'SCSS', 'Python', 'Flask'],
        title: 'ChertNodes',
        text: 'Minecraft servers hosting',
        src: chertNodes,
        links: [
            {href: "#", children: "Live <~>"},
            {href: "#", children: "Cached >=", color: theme.colors.primaryLightText, outlineColor: theme.colors.primaryOutline, mWidth: "119px"},
        ],
    },
    protectX: {
        software: ['React', 'Express', 'Discord.js', 'Node.js', 'HTML', 'SCSS', 'Python', 'Flask'],
        title: 'ProtectX',
        text: 'Discord anti-crash bot',
        src: protectX,
        links: [
            {href: "#", children: "Live <~>"},
        ],
    },
    kahoot: {
        software: ['CSS', 'Express', 'Node.js'],
        title: 'Kahoot Answers Viewer',
        text: 'Get answers to your kahoot quiz',
        src: kahoot,
        links: [
            {href: "#", children: "Live <~>"},
        ],
    },
}

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <MainWrapper direction='column' gap='48px'>
                    <FlexWrapper justify='space-between' align='center' gap='16px'>
                        <FlexWrapper>
                            <SectionTitle section={sectionsData.projects}/>
                        </FlexWrapper>
                        <ProjectsLink href="#">View all ~~&gt;</ProjectsLink>
                    </FlexWrapper>

                    <StyledFlexWrapper gap='16px'>
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
                    </StyledFlexWrapper>
                </MainWrapper>
            </Container>
        </StyledProjects>
    );
}

const StyledProjects = styled.section`
    margin-bottom: 106px;
    
    @media ${theme.media.tablet} {
        margin-bottom: 70px;
    }
`

const MainWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        gap: 25px;
    }
`

const ProjectsLink = styled.a`
    // ${font({weight: 500, Fmax: 16, Fmin: 14})};
    font-weight: 500;
    border-bottom: 2px solid transparent;
    transition: .15s;

    &:hover {
        scale: 1.03;
        font-weight: 600;
        border-bottom: 2px solid ${theme.colors.primaryLightText};
    }
`

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.width1044} {
        justify-content: center;
    }

    @media ${theme.media.tablet} {
        flex-wrap: wrap;
    }
`