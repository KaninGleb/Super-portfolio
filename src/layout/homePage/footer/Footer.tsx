import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Logo} from "../../../components/logo/Logo.tsx";
import {SocialList} from "../../../components/SocialList.tsx";
import {font} from "../../../styles/CommonFont.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <BothSections justify="space-between">
                    <LeftSection>
                        <StyledFlexWrapper gap='24px'>
                            <Logo/>
                            <SocialList iconIds={['email']} iconsTitles={['elias@elias-dev.ml']}/>
                        </StyledFlexWrapper>
                        <Fade direction={'up'}>
                            <span>Web designer and front-end developer</span>
                        </Fade>
                    </LeftSection>

                    <RightSection direction='column' align='flex-start' gap='12px'>
                        <Fade direction={'up'}>
                            <h3>Media</h3>
                        </Fade>
                        <SocialList displayFlex={true}
                                    gap={'8px'}
                                    iconIds={['git', 'figma', 'discord']}
                                    showIcon={true}
                        />
                    </RightSection>
                </BothSections>
                <Fade direction={'up'}>
                    <small>© Copyright 2022. Made by Elias</small>
                </Fade>
            </FooterContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    text-align: center;
    margin: 145px 0 32px;
    border-top: 1px solid ${theme.colors.primaryOutline};
    
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

    p {
        color: ${theme.colors.primaryLightText};
    }
`

const RightSection = styled(FlexWrapper)`

`

const StyledFlexWrapper = styled(FlexWrapper)`
    margin-bottom: 16px;
`