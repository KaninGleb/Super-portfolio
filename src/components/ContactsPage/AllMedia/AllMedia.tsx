import styled from 'styled-components';
import {Container, SectionTitle, SocialList} from '@/common';
import {contentData, sectionsTitlesData} from '@/app/appData.ts';

export const AllMedia = () => {
    return (
        <StyledAllMedia>
            <Container>
                <SectionTitle section={sectionsTitlesData.contactsPage.allMedia}/>
                <StyledSocialList
                    displayFlex={true}
                    wrap={'wrap'}
                    gap={'22px'}
                    gapBetween={'5px'}
                    iconIds={contentData.contactPage.allMedia.socials.iconIds}
                    iconsTitles={contentData.contactPage.allMedia.socials.iconsTitles}
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