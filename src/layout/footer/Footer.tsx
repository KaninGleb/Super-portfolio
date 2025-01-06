import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
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
                                <Icon iconId=''/>
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink>
                                <Icon iconId=''/>
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink>
                                <Icon iconId=''/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </div>

            </FlexWrapper>
            <small>© Copyright 2022. Made by Elias</small>
        </StyledFooter>
    );
};

// const StyledFooter = styled.footer`
//     background-color: #8d556a;
// `

const StyledFooter = styled.footer`
    background-color: #8d556a;
    color: white;
    padding: 20px;
    text-align: center;

    a {
        font-family: "Fira Code", sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #abb2bf;
    }

    p {
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
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`