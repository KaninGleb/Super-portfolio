import styled, { css } from 'styled-components'
import { useEffect, useState } from 'react'
import { Logo, SocialList, ContactBtn, CVBtn } from '@/common'
import { theme } from '@/styles'
import { CV } from '@/assets'

type MenuPropsType = {
  menuItems: Array<{ name: string; id: string }>
  isScrolled: boolean
}

export const MobileMenu = (props: MenuPropsType) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuIsOpen])

  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false)
        }}
      >
        <Logo isOpen={menuIsOpen} />
        <StyledUl>
          {props.menuItems.map((item, index) => (
            <ListItem key={index}>
              <HeaderLink href={`#${item.id}`}>
                <span>#</span>
                {item.name}
              </HeaderLink>
            </ListItem>
          ))}
          <ListItem>
            <StyledContactBtn type="submit">Contact me!!</StyledContactBtn>
            <StyledCVBtn type="submit" href={CV} download>
              Download CV
            </StyledCVBtn>
          </ListItem>
          <ListItem onClick={(e) => e.stopPropagation()}>
            <LanguageSelect aria-label="Language change">
              <option>EN</option>
              <option>RU</option>
            </LanguageSelect>
          </ListItem>
        </StyledUl>
        <StyledSocialList
          displayFlex={true}
          gap={'8px'}
          iconIds={['git', 'discord', 'figma']}
          showIcon={true}
          iconSize={'64px'}
        />
      </MobileMenuPopup>
    </StyledMobileMenu>
  )
}

const StyledMobileMenu = styled.nav`
  font-size: 26px;
  display: none;
  position: relative;

  @media ${theme.media.tablet} {
    display: block;
  }

  @media ${theme.media.mobile} {
    font-size: 32px;
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;

      @media ${theme.media.mobile} {
        align-items: flex-start;
        text-align: left;
        gap: 110px;
        padding: 16px;

        ul + ul {
          margin: 0 auto;
        }
      }
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 22px;
  right: 22px;
  width: 24px;
  height: 24px;
  z-index: 9999999;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.primaryOutline};
    position: absolute;
    left: 0;
    bottom: 12px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.primaryOutline};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: '';
      display: block;
      width: 15px;
      height: 2px;
      background-color: ${theme.colors.primaryOutline};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 24px;
        `}
    }
  }

  @media ${theme.media.tablet} {
    top: 16px;
  }
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${theme.media.tablet} {
    align-items: center;
  }

  @media ${theme.media.mobile} {
    align-items: flex-start;
  }
`

const StyledSocialList = styled(SocialList)`
  @media ${theme.media.mobile} {
    height: 64px;
  }
`

const ListItem = styled.li`
  position: relative;
`

const StyledContactBtn = styled(ContactBtn)`
  font-size: 24px;
  max-width: 300px;
  margin: 5px 0 10px;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const StyledCVBtn = styled(CVBtn)`
  font-size: 24px;
  max-width: 300px;
  margin-bottom: 20px;
  @media ${theme.media.tablet} {
    display: block;
  }
`

const HeaderLink = styled.a`
  display: inline-block;
  padding: 12px 0;
  position: relative;
  transition: color 0.3s ease;

  span {
    color: ${theme.colors.secondaryText};
  }

  color: ${theme.colors.primaryLightText};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: ${theme.colors.primaryOutline};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    span {
      font-weight: 500;
    }
    color: ${theme.colors.primaryText};

    &::after {
      transform: scaleX(1);
    }
  }

  @media ${theme.media.tablet} {
    &:hover {
      color: ${theme.colors.primaryLightText};

      span {
        font-weight: inherit;
      }

      &::after {
        display: none;
      }
    }
  }
`

const LanguageSelect = styled.select`
  font-family: inherit;
  font-weight: 600;
  font-size: inherit;
  cursor: pointer;

  border: none;
  background-color: transparent;
  color: ${theme.colors.primaryLightText};

  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;

  &:hover {
    color: ${theme.colors.primaryText};
  }

  option {
    color: ${theme.colors.primaryLightText};
    background-color: ${theme.colors.primaryBg};
  }

  &:focus-visible {
    outline: none;
  }

  @media ${theme.media.tablet} {
    margin-left: 14px;
    width: fit-content;
  }

  @media ${theme.media.mobile} {
    margin-left: unset;
  }
`
