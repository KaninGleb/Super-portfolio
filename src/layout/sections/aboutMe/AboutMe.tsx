import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {sections, SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {Paragraph} from "../../../components/Paragraph.tsx";
import {textData} from "../../textData.ts";
import aboutMePhoto from "../../../assets/images/about-me-photo.png";
import {Link} from "../../../components/Link.tsx";
import {Photo} from "../../../components/Photo.tsx";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <FlexWrapper gap='166px'>
                    <LeftSection>
                        <StyledSectionTitle>
                            {/*<SectionTitle><span>#</span>about-me</SectionTitle>*/}
                            <SectionTitle section={sections.aboutMe}/>
                            <DecorativeLine width={'326px'} height={'2px'}/>
                        </StyledSectionTitle>
                        <Paragraph children={textData.aboutMe.paragraph1}/>
                        <Paragraph children={textData.aboutMe.paragraph2}/>
                        <Paragraph children={textData.aboutMe.paragraph3}/>
                        <Link href={'#'} children={'Read more ->'} mWidth={'150px'}/>
                    </LeftSection>
                    <RightSection>
                        <Photo src={aboutMePhoto} width='339px' height='507px' alt=""/>
                        <StyledBorder/>
                    </RightSection>
                </FlexWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    max-height: 508px;
    height: 100%;
    margin-bottom: 112px;
`

const LeftSection = styled.div`
    p {
        margin-bottom: 27px;
    }
`

const StyledSectionTitle = styled(FlexWrapper)`
    max-width: 516px;
    width: 100%;
    margin-bottom: 23px;
`

const RightSection = styled.div`
    
`

const StyledBorder = styled.div`
    width: 271px;
    height: 1px;
    background-color: ${theme.colors.secondaryBorder};
    margin-left: 45px;
`;