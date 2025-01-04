import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {Photo} from "../../../components/Photo.tsx";
import aboutMePhoto from "../../../assets/images/about-me-photo.png";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <FlexWrapper>
                <SectionTitle><span>#</span>about-me</SectionTitle>
                <DecorativeLine width={'326px'} height={'2px'}/>
            </FlexWrapper>

            <FlexWrapper>
                <FlexWrapper>
                    <Paragraph>Hello, i’m Elias! <br/> <br/>
                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                        scratch and raise them into modern user-friendly web experiences. <br/> <br/>
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                        been helping various clients to establish their presence online. I always strive to learn about the
                        newest technologies and frameworks.
                    </Paragraph>
                </FlexWrapper>

                <Photo src={aboutMePhoto} width='339px' height='507px' alt=""/>
            </FlexWrapper>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    background-color: #ff76ff;
`

const Paragraph = styled.p`
    
`