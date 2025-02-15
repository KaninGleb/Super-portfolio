import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {projectsData, sectionsTitlesData} from "../../data/appData.ts";
import {Project} from "../homePage/sections/projects/project/Project.tsx";
import {imagePulseAnimation} from "../../animations/animations.ts";
import bgLeft from "../../assets/images/background/projects-page/projects-page-bg-pseudo-left.svg";
import bgRight from "../../assets/images/background/projects-page/projects-page-bg-pseudo-right.svg";

export const AllProjects = () => {
    return (
        <StyledAllProjects>
            <Container>
                <MainWrapper direction='column' gap='48px'>
                    <SectionTitle section={sectionsTitlesData.projectsPage.allProjects}/>
                    <Fade direction={'left'} duration={1200}>
                        <StyledFlexWrapper wrap='wrap' gap='16px'>
                            {Object.values(projectsData).slice(0, 5).map((project, index) => (
                                <Project
                                    key={index}
                                    imageLink={project.imageLink}
                                    software={project.software}
                                    title={project.title}
                                    text={project.text}
                                    src={project.src}
                                    links={project.links}
                                    maxWidth={'330px'}
                                />
                            ))}
                        </StyledFlexWrapper>
                    </Fade>
                </MainWrapper>
            </Container>
        </StyledAllProjects>
    )
}

const StyledAllProjects = styled.section`
    margin-bottom: 106px;
    position: relative;
    overflow-x: clip;

    &::before {
        content: "";
        background-image: url("${bgLeft}");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 142px;
        left: 0;
        width: 170px;
        height: 1720px;
        animation: ${imagePulseAnimation} 2s infinite;
    }

    &::after {
        content: "";
        background-image: url("${bgRight}");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        right: -90px;
        width: 170px;
        height: 1240px;
        animation: ${imagePulseAnimation} 2s infinite;
    }

    @media ${theme.media.extraPageBgPseudoOff} {
        &::before, &::after {
            display: none;
        }
    }
    
    @media ${theme.media.tablet} {
        margin-bottom: 70px;
    }
`

const MainWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        gap: 25px;
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