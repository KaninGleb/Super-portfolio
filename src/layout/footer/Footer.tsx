import {theme} from "../../styles/Theme.tsx";
import styled from "styled-components";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Icon} from "../../components/icon/Icon.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <BothSections justify="space-between">
                    <LeftSection>
                        <FlexWrapper gap='24px'>
                            <Logo/>
                            <p>elias@elias-dev.ml</p>
                        </FlexWrapper>

                        <span>Web designer and front-end developer</span>
                    </LeftSection>

                    <RightSection direction='column' align='flex-start' gap='12px'>
                        <h3>Media</h3>
                        <SocialList>
                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId='git' width="32px" height="32px" viewBox="0 0 32 32"/>
                                </SocialLink>
                            </SocialItem>

                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId='figma' width="32px" height="32px" viewBox="0 0 32 32"/>
                                </SocialLink>
                            </SocialItem>

                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId='discord' width="32" height="32" viewBox="0 0 32 32"/>
                                </SocialLink>
                            </SocialItem>
                        </SocialList>
                    </RightSection>
                </BothSections>
                <small>© Copyright 2022. Made by Elias</small>
            </FooterContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    text-align: center;
    margin: 145px 0 32px;
    border-top: 1px solid ${theme.colors.primaryBorder};
    
    
    h3 {
        font-weight: 500;
        font-size: 24px;
    }

    small {
        font-size: 16px;
        color: #abb2bf;
    }
`;

const FooterContainer = styled(Container)`

`

const BothSections = styled(FlexWrapper)`
    margin: 32px 0 48px;
`

const LeftSection = styled.div`
    div {
        margin-bottom: 16px;
    }
    
    p {
        color: ${theme.colors.primaryLightText};
    }
`

const RightSection = styled(FlexWrapper)`
    
`

const SocialList = styled.ul`
    display: flex;
    gap: 8px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`