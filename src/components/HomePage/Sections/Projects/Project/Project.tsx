import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { theme } from '../../../../../styles/Theme.tsx'
import { FlexWrapper } from '../../../../../common/Layout/FlexWrapper.tsx'
import { Link } from '../../../../../common/Link.tsx'
import { contentData } from '../../../../../app/appData.ts'

type LinkPropsType = {
  href: string
  children: string
  color?: string
  outlineColor?: string
  mWidth?: string
}

type ProjectPropsType = {
  src?: string
  imageLink: string
  software: string[]
  title: string
  text: string
  links: LinkPropsType[]
  maxWidth?: string
}

export const Project = (props: ProjectPropsType) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <StyledWork maxWidth={props.maxWidth}>
      <ImageWrapper onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Image src={props.src} alt="" />
        <ImageLink
          target={'_blank'}
          href={props.imageLink}
          initial={{ opacity: 0, scale: 0 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{
            duration: 0.1,
            scale: { type: 'spring', bounce: 0.5 },
          }}
        >
          {contentData.homePage.projects.imageHoverBtn}
        </ImageLink>
      </ImageWrapper>
      <SizeWrapper>
        <Software>
          {props.software.map((software, index) => (
            <li key={index}>{software}</li>
          ))}
        </Software>
        <StyledHr />
        <MainSizeWrapper direction="column" gap="16px">
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
          <ButtonsFlexWrapper>
            {props.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                children={link.children}
                color={link.color}
                outlineColor={link.outlineColor}
                mWidth={link.mWidth}
              />
            ))}
          </ButtonsFlexWrapper>
        </MainSizeWrapper>
      </SizeWrapper>
    </StyledWork>
  )
}

const StyledWork = styled.div<{ maxWidth?: string }>`
  outline: 1px solid ${theme.colors.primaryOutline};
  min-width: 330px;
  max-width: ${(props) => props.maxWidth || '490px'};
  width: 100%;
  height: 100%;
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    background-color 0.3s;
  cursor: default;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    background-color: rgba(40, 44, 51, 0.1);
  }

  @media ${theme.media.width1044} {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 238px;
    max-width: unset;
  }

  @media ${theme.media.tablet} {
    &:hover {
      transform: none;
      box-shadow: none;
      background-color: transparent;
    }
  }

  @media ${theme.media.mobile} {
    max-width: unset;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${theme.colors.primaryOutline};
  object-fit: cover;
`

const ImageLink = styled(motion.a)`
  font-size: 22px;
  position: absolute;
  border-radius: 8px;
  padding: 12px 0;
  background-color: rgba(199, 120, 221, 0.8);
  transform: translate(-50%, -50%);
  width: 50%;
  text-align: center;
  transition: scale 0.2s ease-in-out;

  &:hover {
    scale: 1.05;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  transition:
    transform 2s,
    background-color 2s,
    backdrop-filter 2s;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 2px;
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }
  }

  &:hover ${ImageLink} {
    opacity: 1;
  }

  @media ${theme.media.tablet} {
    &:hover {
      &::before {
        content: none;
        background-color: transparent;
        backdrop-filter: none;
      }

      ${ImageLink} {
        opacity: initial;
      }
    }
  }
`

const SizeWrapper = styled.div`
  padding: 8px;
`

const MainSizeWrapper = styled(FlexWrapper)`
  margin: 16px 8px 8px;
`

const Software = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
  color: ${theme.colors.primaryLightText};
  cursor: default;
`

const StyledHr = styled.hr`
  border: none;
  height: 1px;
  background-color: ${theme.colors.primaryOutline};
  margin: 8px -8px;
`

const Title = styled.h3`
  font-weight: 500;
  font-size: 24px;
  transition: 0.2s;
`

const Text = styled.span`
  color: ${theme.colors.primaryLightText};
  transition: 0.2s;
`

const ButtonsFlexWrapper = styled(FlexWrapper)`
  gap: 16px;

  @media ${theme.media.width1044} {
    flex-wrap: wrap;
  }
`
