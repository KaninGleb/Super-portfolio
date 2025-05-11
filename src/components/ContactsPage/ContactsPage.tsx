import styled from 'styled-components'
import { ScrollFillBar, RouterHeader, FlexWrapper } from '@/common'
import { Media, TitleSection, ContactsForContactsPage, AllMedia, Footer } from '@/components'
import { sectionsTitlesData } from '@/app/appData.ts'

export const ContactsPage = () => {
  return (
    <StyledDiv>
      <GrowWrapper>
        <ScrollFillBar />
        <Media />
        <RouterHeader />
        <TitleSection section={sectionsTitlesData.contactsPage.contacts} />
        <ContactsForContactsPage />
        <AllMedia />
      </GrowWrapper>
      <Footer />
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
