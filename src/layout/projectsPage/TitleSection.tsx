import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {sectionsData} from "../../data/appData.ts";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Paragraph} from "../../components/Paragraph.tsx";

export const TitleSection = () => {
    return (
        <StyledTitleSection>
            <Container>
                <FlexWrapper direction={'column'} gap={'14px'}>
                    <SectionTitle section={sectionsData.headerProjects}/>
                    <Paragraph color={theme.colors.primaryText}>List of my projects</Paragraph>
                </FlexWrapper>
            </Container>
        </StyledTitleSection>
    )
}

const StyledTitleSection = styled.section`
    margin-bottom: 68px;
`