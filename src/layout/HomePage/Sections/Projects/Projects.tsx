import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {theme} from "../../../../styles/Theme.tsx";
import {Container} from "../../../../common/Layout/Container.tsx";
import {FlexWrapper} from "../../../../common/Layout/FlexWrapper.tsx";
import {SectionTitle} from "../../../../components/SectionTitle.tsx";
import {contentData, projectsData, sectionsTitlesData} from '../../../../app/appData.ts';
import {Project} from "./Project/Project.tsx";
import {Link} from "react-router-dom";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <MainWrapper direction='column' gap='48px'>
                    <FlexWrapper justify='space-between' align='center' gap='16px'>
                        <SectionTitle section={sectionsTitlesData.homePage.projects}/>
                        <Fade direction={'up'} duration={800}>
                            <ProjectsLink to="/projects">{contentData.homePage.projects.allProjectsBtn}</ProjectsLink>
                        </Fade>
                    </FlexWrapper>
                    <Fade direction={'left'} duration={1200}>
                        <StyledFlexWrapper gap='16px'>
                            {Object.values(projectsData).slice(0, 3).map((project, index) => (
                                <Project
                                    key={index}
                                    imageLink={project.imageLink}
                                    software={project.software}
                                    title={project.title}
                                    text={project.text}
                                    src={project.src}
                                    links={project.links}
                                />
                            ))}
                        </StyledFlexWrapper>
                    </Fade>
                </MainWrapper>
            </Container>
        </StyledProjects>
    )
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
    font-weight: 500;
    padding: 5px;
    border-bottom: 2px solid transparent;
    transition: .2s;

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