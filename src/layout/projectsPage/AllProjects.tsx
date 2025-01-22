import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {projectsData, sectionsData} from "../../data/appData.ts";
import {Project} from "../sections/projects/project/Project.tsx";

export const AllProjects = () => {
    return (
        <StyledAllProjects>
            <Container>
                <MainWrapper direction='column' gap='48px'>
                    <FlexWrapper justify='space-between' align='center' gap='16px'>
                        <FlexWrapper>
                            <SectionTitle section={sectionsData.allProjects}/>
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