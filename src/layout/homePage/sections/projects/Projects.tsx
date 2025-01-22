import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {Container} from "../../../../components/Container.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../../components/SectionTitle.tsx";
import {projectsData, sectionsData} from "../../../../data/appData.ts";
import {Project} from "./project/Project.tsx";
import {font} from "../../../../styles/CommonFont.tsx";
import {Link} from "react-router-dom";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <MainWrapper direction='column' gap='48px'>
                    <FlexWrapper justify='space-between' align='center' gap='16px'>
                        <FlexWrapper>
                            <SectionTitle section={sectionsData.projects}/>
                        </FlexWrapper>
                        <ProjectsLink to="/projects">View all ~~&gt;</ProjectsLink>
                    </FlexWrapper>

                    <StyledFlexWrapper gap='16px'>
                        {Object.values(projectsData).slice(0, 3).map((project, index) => (
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

const ProjectsLink = styled(Link)`
    // ${font({weight: 500, Fmax: 16, Fmin: 14})};
    font-weight: 500;
    border-bottom: 2px solid transparent;
    transition: .15s;

    &:hover {
        scale: 1.03;
        font-weight: 600;
        border-bottom: 2px solid ${theme.colors.primaryLightText};
    }
    
    @media ${theme.media.tablet} {
        &:hover {
            font-weight: 500;
        }
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