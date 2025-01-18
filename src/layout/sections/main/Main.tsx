import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Paragraph} from "../../../components/Paragraph.tsx";
import {textData} from "../../../data/appData.ts";
import {Photo} from "../../../components/Photo.tsx";
import photo from "../../../assets/images/MyImage.png"
import logo from "../../../assets/images/main-pseudo/logo-outline.svg"
import dotsForMain from "../../../assets/images/main-pseudo/dots-main-photo.svg"
import {btnAnimation} from "../../../animations/animations.ts";
import {font} from "../../../styles/CommonFont.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <StyledFlexWrapper align="center" justify="space-around" gap="30px">
                    <TextWrapper direction='column' align='flex-start'>
                        <MainTitle>Elias is a <span>web designer</span> and <span>front-end</span> developer</MainTitle>
                        <Paragraph children={textData.main.paragraph}/>
                        <StyledBtn type='submit'>Contact me!!</StyledBtn>
                    </TextWrapper>
                    <PhotoWrapper direction='column'>
                        <Photo src={photo} Wmax={458} Wmin={306} alt="Main photo"/>
                        <PortfolioMessage>
                            <ColorBlock/>
                            Currently working on <span>Portfolio</span>
                        </PortfolioMessage>
                    </PhotoWrapper>
                </StyledFlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    margin-bottom: 112px;
`

const StyledFlexWrapper = styled(FlexWrapper)`
    @media ${theme.media.width1044} {
        display: flex;
        flex-wrap: wrap;
    }
`

const TextWrapper = styled(FlexWrapper)`
    margin: 74px 0 auto;
    text-align: left;
    p {
        margin-bottom: 25px;
        line-height: 1.5625;
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
    }
    
    &::after {
        content: "";
        background-image: url("${dotsForMain}");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 100px;
        right: 16px;
        width: clamp(55px, calc((100vw - 84px) * (84 - 55) / (1024 - 84) + 55px), 84px);
        min-width: 56px;
        height: auto;
        aspect-ratio: 1/1;
        z-index: 1;
    }
`

const MainTitle = styled.h1`
    ${font({weight:500, Fmax: 32, Fmin:24})};
    margin-bottom: 31px;

    span {
        color: ${theme.colors.secondaryText};
    }
`

const StyledBtn = styled.button`
    outline: 1px solid #c778dd;
    padding: 8px 16px;
    max-width: 148px;
    width: 100%;
    color: ${theme.colors.primaryText};
    transition: .15s;
    animation: ${btnAnimation} 5s infinite;
    animation-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    
    &:hover {
        background-color: ${theme.colors.primaryHover};
        scale: 1.05;
        animation-play-state: paused;
    }
`

const ColorBlock = styled.div`
    background-color: ${theme.colors.secondaryText};
    width: 16px;
    height: 16px;
`

const PortfolioMessage = styled.span`
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
`