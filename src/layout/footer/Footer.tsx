import styled from "styled-components";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Icon} from "../../components/icon/Icon.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify="space-between">
                    <FlexWrapper direction="column" gap='16px'>
                        <FlexWrapper gap='24px'>
                            <Logo/>
                            <p>elias@elias-dev.ml</p>
                        </FlexWrapper>

                        <span>Web designer and front-end developer</span>
                    </FlexWrapper>

                    <div>
                        <h3>Media</h3>
                        <SocialList>
                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId='git' width="21px" height="20px" viewBox="0 0 21 20"/>
                                </SocialLink>
                            </SocialItem>

                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId='figma' width="14px" height="20px" viewBox="0 0 14 20"/>
                                </SocialLink>
                            </SocialItem>

                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId='discord' width="25" height="20" viewBox="0 0 25 20"/>
                                </SocialLink>
                            </SocialItem>
                        </SocialList>
                    </div>

                </FlexWrapper>
                <small>© Copyright 2022. Made by Elias</small>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #8d556a;
    text-align: center;

    a {
        font-family: "Fira Code", sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #abb2bf;
    }

    span {
        font-family: "Fira Code", sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #fff;
    }

    h3 {
        font-family: "Fira Code", sans-serif;
        font-weight: 500;
        font-size: 24px;
        color: #fff;
    }

    small {
        font-family: "Fira Code", sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #abb2bf;
    }
`;

const SocialList = styled.ul`
    display: flex;
    gap: 8px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`