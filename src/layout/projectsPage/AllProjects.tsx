import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {projectsData, sectionsData} from "../../data/appData.ts";
import {Project} from "../homePage/sections/projects/project/Project.tsx";
import bgLeft from "../../assets/images/background/projects-page/projects-page-bg-pseudo-left.svg";
import bgRight from "../../assets/images/background/projects-page/projects-page-bg-pseudo-right.svg";
import {imagePulseAnimation} from "../../animations/animations.ts";

export const AllProjects = () => {
    return (
        <StyledAllProjects>
            <Container>
                <MainWrapper direction='column' gap='48px'>
                    <FlexWrapper justify='space-between' align='center' gap='16px'>
                        <FlexWrapper>
                            <SectionTitle section={sectionsData.projectsPage.allProjects}/>
                        </FlexWrapper>
                    </FlexWrapper>

                    <StyledFlexWrapper wrap='wrap' gap='16px'>
                        {Object.values(projectsData).map((project, index) => (
                            <Project
                                key={index}
                                software={project.software}
                                title={project.title}
                                text={project.text}
                                src={project.src}
                                links={project.links}
                                maxWidth={'330px'}
                            />
                        ))}
                    </StyledFlexWrapper>
                </MainWrapper>
            </Container>
        </StyledAllProjects>
    );
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