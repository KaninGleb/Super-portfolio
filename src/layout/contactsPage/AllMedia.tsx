import styled from "styled-components";
import {Container} from "../../components/Container.tsx";
import {sectionsTitlesData} from "../../data/appData.ts";
import {SectionTitle} from "../../components/SectionTitle.tsx";
import {SocialList} from "../../components/SocialList.tsx";

export const AllMedia = () => {
    return (
        <StyledAllMedia>
            <Container>
                <SectionTitle section={sectionsTitlesData.contactsPage.allMedia}/>
                <StyledSocialList displayFlex={true} wrap={'wrap'} gap='22px'
                                    iconIds={['git', 'discord', 'figma', 'email']}
                                    showIcon={true}
                                    iconSize={'32'}
                />
            </Container>
        </StyledAllMedia>
    )
}

const StyledAllMedia = styled.section`
    h2 {
        margin-bottom: 22px;
    }
`

const StyledSocialList = styled(SocialList)`
    flex-wrap: wrap;
`