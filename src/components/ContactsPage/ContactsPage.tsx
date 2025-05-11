import styled from 'styled-components';
import {FlexWrapper, RouterHeader, ScrollFillBar} from '@/common';
import {Media} from '../HomePage/Media/Media.tsx';
import {TitleSection} from '../ProjectsPage/TitleSection.tsx';
import {sectionsTitlesData} from '@/app/appData.ts';
import {ContactsForContactsPage} from '@/components';
import {AllMedia} from '@/components';
import {Footer} from '../HomePage/Footer/Footer.tsx';

export const ContactsPage = () => {
    return (
        <StyledDiv>
            <GrowWrapper>
                <ScrollFillBar/>
                <Media/>
                <RouterHeader/>
                <TitleSection section={sectionsTitlesData.contactsPage.contacts}/>
                <ContactsForContactsPage/>
                <AllMedia/>
            </GrowWrapper>
            <Footer/>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const GrowWrapper = styled(FlexWrapper)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`