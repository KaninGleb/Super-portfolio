import styled from 'styled-components'
import { theme } from '../../../styles/Theme.tsx'
import { Container } from '../../../common/Layout/Container.tsx'
import { FlexWrapper } from '../../../common/Layout/FlexWrapper.tsx'
import { useEffect, useState } from 'react'
import { Logo } from '../../../common/Logo.tsx'
import { HeaderMenu } from './HeaderMenu/HeaderMenu.tsx'
import { MobileMenu } from './MobileMenu/MobileMenu.tsx'
import { headerLinks } from '../../../app/appData.ts'

type HeaderPropsType = {
  isScrolled: boolean
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const scrollY = window.scrollY
    setIsScrolled(scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledHeader isScrolled={isScrolled}>
      <Container>
        <MarginWrapper align="center" justify="space-between" isScrolled={isScrolled}>
          <Logo />
          <FlexWrapper gap="32px">
            <HeaderMenu menuItems={headerLinks} />
            <MobileMenu menuItems={headerLinks} isScrolled={isScrolled} />
          </FlexWrapper>
        </MarginWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header<HeaderPropsType>`
  margin-bottom: 62px;
  position: sticky;
  top: 0;
  background-color: ${({ isScrolled }) => (isScrolled ? theme.colors.secondaryBg : theme.colors.primaryBg)};
  z-index: 2;
  transition: background-color 0.3s ease;

  @media ${theme.media.mobile} {
    margin-bottom: 34px;
  }
`

const MarginWrapper = styled(FlexWrapper)<HeaderPropsType>`
  padding: ${({ isScrolled }) => (isScrolled ? '0' : '18px 0 8px')};
  transition: padding 0.3s ease;

  @media ${theme.media.tablet} {
    padding: ${({ isScrolled }) => (isScrolled ? '15px 0' : '18px 0 8px')};
  }
`
