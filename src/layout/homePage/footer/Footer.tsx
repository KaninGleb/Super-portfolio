import {theme} from "../../../styles/Theme.tsx";
import styled, {css} from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Logo} from "../../../components/logo/Logo.tsx";
import {SocialList} from "../../../components/SocialList.tsx";
import {font} from "../../../styles/CommonFont.tsx";

type FooterType = {isAbsolute?: boolean};

export const Footer = (props:FooterType) => {
    return (
        <StyledFooter isAbsolute={props.isAbsolute}>
            <FooterContainer>
                <BothSections justify="space-between">
                    <LeftSection>
                        <FlexWrapper gap='24px'>
                            <Logo/>
                            <SocialList iconIds={['email']} iconsTitles={['elias@elias-dev.ml']}/>
                        </FlexWrapper>

                        <span>Web designer and front-end developer</span>
                    </LeftSection>

                    <RightSection direction='column' align='flex-start' gap='12px'>
                        <h3>Media</h3>
                        <SocialList displayFlex={true}
                                    gap={'8px'}
                                    iconIds={['git', 'figma', 'discord']}
                                    showIcon={true}
                        />
                    </RightSection>
                </BothSections>
                <small>© Copyright 2022. Made by Elias</small>
            </FooterContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer<FooterType>`
    text-align: center;
    margin: 145px 0 32px;
    border-top: 1px solid ${theme.colors.primaryOutline};

    ${props => props.isAbsolute && css`
        position: absolute;
        bottom: 0;
        width: 100%;
    `
    }
    h3 {
        font-weight: 500;
        font-size: 24px;
    }

    small {
        font-size: 16px;
        color: #abb2bf;
    }
    
    @media ${theme.media.tablet} {
        margin: 70px 0 16px;
        small {
            ${font({weight: 400, color: theme.colors.primaryLightText, Fmax: 16, Fmin: 14})};
        }
    }
`

const FooterContainer = styled(Container)`

`

const BothSections = styled(FlexWrapper)`
    margin: 32px 0 48px;

    @media ${theme.media.tablet} {
        flex-wrap: wrap;
        margin: 20px 0 30px;
        gap: 30px;
    }
`

const LeftSection = styled.div`
    text-align: left;
    div {
        margin-bottom: 16px;
    }

    p {
        color: ${theme.colors.primaryLightText};
    }
`

const RightSection = styled(FlexWrapper)`

`