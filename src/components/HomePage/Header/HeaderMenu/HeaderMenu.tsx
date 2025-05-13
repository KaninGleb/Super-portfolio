import styled from 'styled-components'
import { theme } from '@/styles'

type MenuPropsType = {
  menuItems: Array<{ name: string; id: string }>
}

export const HeaderMenu = (props: MenuPropsType) => {
  return (
    <StyledHeaderMenu>
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
          <LanguageSelect aria-label="Language change">
            <option>EN</option>
            <option>RU</option>
          </LanguageSelect>
        </ListItem>
      </StyledUl>
    </StyledHeaderMenu>
  )
}

const StyledHeaderMenu = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
`

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`

const ListItem = styled.li`
  position: relative;
`

const HeaderLink = styled.a`
  display: inline-block;
  position: relative;
  transition: color 0.3s ease;
  padding: 12px 0;

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
`

const LanguageSelect = styled.select`
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
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
    color: ${theme.colors.primaryBg};

    option {
      color: ${theme.colors.primaryText};
      background-color: ${theme.colors.primaryBg};
    }
  }
`
