import styled from "styled-components";
import {Fade, Zoom} from "react-awesome-reveal";
import {useState} from "react";
import {theme} from "../../../../styles/Theme.tsx";
import {Container} from "../../../../components/Container.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Paragraph} from "../../../../components/Paragraph.tsx";
import {textData} from "../../../../data/appData.ts";
import {ContactBtn} from "../../../../components/ContactBtn.tsx"; // Adjust the import path
import {CVBtn} from "../../../../components/CVBtn.tsx";
import CV from "../../../../assets/cv/Kanin_Gleb_Front-end_developer_CV.pdf"
import {MyPhoto} from "../../../../components/Photo.tsx";
import photo from "../../../../assets/images/MyImage.png"
import logo from "../../../../assets/images/main-pseudo/logo-outline.svg"
import dotsForMain from "../../../../assets/images/main-pseudo/dots-main-photo.svg"
import {Modal} from "../../../../components/modal/Modal.tsx";
import {imagePulseAnimation} from "../../../../animations/animations.ts";

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
                                <MainTitle>Elias is a <span>web designer</span> and <span>front-end developer</span></MainTitle>
                                <Paragraph children={textData.main.paragraph} fontWeight={'400'}/>
                            </Fade>
                            <Zoom>
                                <FlexWrapper gap={'20px'}>
                                    <ContactBtn type='button' onClick={handleToggleModal}>Contact me!!</ContactBtn>
                                    <CVBtn type='submit' href={CV} download>Download CV</CVBtn>
                                </FlexWrapper>
                            </Zoom>
                        </TextWrapper>
                    <Fade direction="right">
                        <PhotoWrapper direction='column'>
                            <MyPhoto src={photo} Wmax={458} Wmin={306} alt="Main photo"/>
                            <PortfolioMessage>
                                <ColorBlock/>
                                <MessageTextWrapper>
                                    Currently working on <span>Portfolio</span>
                                </MessageTextWrapper>
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
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 30px;

    span {
        color: ${theme.colors.secondaryText};
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
    flex-wrap: wrap;
    
    span {
        font-weight: 600;
        color: #ffffff;
    }
    
    @media screen and (max-width: 950px) {
        margin: 0 auto;
    }
    
    @media ${theme.media.mobile} {
    }
`