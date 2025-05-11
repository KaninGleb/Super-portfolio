import styled from "styled-components";
import {useState} from "react";
import {Fade, Zoom} from "react-awesome-reveal";
import {theme} from "../../../../styles/Theme.tsx";
import {Container} from "../../../../components/Container.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Paragraph} from "../../../../common/Paragraph.tsx";
import {contentData} from '../../../../app/appData.ts';
import {ContactBtn} from "../../../../common/ContactBtn.tsx";
import {CVBtn} from "../../../../common/CVBtn.tsx";
import {MyPhoto} from "../../../../components/Photo.tsx";
import {Modal} from "../../../../common/Modal.tsx";
import {imagePulseAnimation} from "../../../../animations/animations.ts";
import photo from "../../../../assets/images/section-images/main/main-my-photo.png"
import logo from "../../../../assets/images/sections-pseudo/main-pseudo/logo-outline.svg"
import dotsForMain from "../../../../assets/images/sections-pseudo/main-pseudo/dots-main-photo.svg"
import CV from "../../../../assets/cv/Kanin_Gleb_Front-end_developer_CV.pdf"

export const Main = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleToggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <StyledMain>
            <Container>
                <StyledFlexWrapper align="center" justify="space-around" gap="30px">
                        <TextWrapper direction='column' align='flex-start'>
                            <Fade direction={'down'} cascade damping={0.2}>
                                <MainTitle dangerouslySetInnerHTML={{__html: contentData.homePage.main.title}}/>
                                <Paragraph children={contentData.homePage.main.paragraph} fontWeight={'400'}/>
                            </Fade>
                            <Zoom>
                                <FlexWrapper gap={'20px'}>
                                    <ContactBtn type='button' onClick={handleToggleModal}>{contentData.homePage.main.contactBtn}</ContactBtn>
                                    <CVBtn type='submit' href={CV} download>{contentData.homePage.main.cvBtn}</CVBtn>
                                </FlexWrapper>
                            </Zoom>
                        </TextWrapper>
                    <Fade direction="right">
                        <PhotoWrapper direction='column'>
                            <MyPhoto src={photo} Wmax={458} Wmin={306} alt="Main photo"/>
                            <PortfolioMessage>
                                <ColorBlock/>
                                <MessageTextWrapper dangerouslySetInnerHTML={{__html: contentData.homePage.main.status}}/>
                            </PortfolioMessage>
                        </PhotoWrapper>
                    </Fade>
                </StyledFlexWrapper>
            </Container>
            <Modal isVisible={isModalVisible} onClose={handleToggleModal}/>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    margin-bottom: 112px;
    overflow: hidden;
    padding-bottom: 4px;
    
    @media ${theme.media.tablet} {
        margin-bottom: 70px;
    }
`

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        flex-wrap: wrap;
        gap: 0;
    }
`

const TextWrapper = styled(FlexWrapper)`
    margin: 74px 0 auto;
    text-align: left;
    p {
        margin-bottom: 25px;
        line-height: 1.5625;
    }

    @media ${theme.media.tablet} {
        margin: 0;
    }
`

const PhotoWrapper = styled(FlexWrapper)`
    position: relative;

    &::before {
        content: "";
        background-image: url("${logo}");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 84px;
        left: calc(32% - (clamp(55px, calc((100vw - 100px) * (155 - 55) / (1024 - 100) + 55px), 155px)));
        width: clamp(55px, calc((100vw - 155px) * (155 - 55) / (1024 - 155) + 55px), 155px);
        min-width: 84px;
        height: auto;
        aspect-ratio: 1/1;
        z-index: 0;
        animation: ${imagePulseAnimation} 2s infinite;
    }
    
    &::after {
        content: "";
        background-image: url("${dotsForMain}");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: clamp(165px, calc((100vw - 84px) * (246 - 165) / (1024 - 84) + 165px), 246px);
        right: 16px;
        width: clamp(55px, calc((100vw - 84px) * (84 - 55) / (1024 - 84) + 55px), 84px);
        min-width: 56px;
        height: auto;
        aspect-ratio: 1/1;
        z-index: 1;
        animation: ${imagePulseAnimation} 2s infinite;
    }
`

const MainTitle = styled.h2`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;

    span {
        color: ${theme.colors.secondaryText};
    }

    @media ${theme.media.tablet} {
        font-size: 32px;
    }

    @media ${theme.media.mobile} {
        font-size: 28px;
    }
`

const ColorBlock = styled.div`
    background-color: ${theme.colors.secondaryText};
    width: 16px;
    height: 16px;
`

const MessageTextWrapper = styled.div`
    @media ${theme.media.mobile} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`

const PortfolioMessage = styled.div`
    font-weight: 500;
    color: #abb2bf;

    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #abb2bf;
    padding: 8px;
    max-width: 402px;
    width: 100%;
    margin-left: 18px;
    
    span {
        font-weight: 600;
        color: #ffffff;
    }
    
    @media screen and (max-width: 950px) {
        margin: 0 auto;
    }
`