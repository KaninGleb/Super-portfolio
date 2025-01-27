import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {Paragraph} from "../../components/Paragraph.tsx";

type TitleSectionPropsType = {
    section: {
        id?: string
        name: string
        symbol: string
        Wmin?: number
        Wmax?: number
        description: string
    }
}

export const TitleSection = (props: TitleSectionPropsType) => {
    return (
        <StyledTitleSection>
            <Container>
                <FlexWrapper direction={'column'} gap={'14px'}>
                    <SectionTitle section={props.section}/>
                    <Fade direction={'up'}>
                        <Paragraph color={theme.colors.primaryText}>{props.section.description}</Paragraph>
                    </Fade>
                </FlexWrapper>
            </Container>
        </StyledTitleSection>
    )
}

const StyledTitleSection = styled.section`
    margin-bottom: 68px;
    
    @media ${theme.media.tablet} {
        margin-bottom: 40px;
    }
`