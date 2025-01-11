import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Paragraph} from "../../../components/Paragraph.tsx";
import {textData} from "../../../data/appData.ts";
import {Photo} from "../../../components/Photo.tsx";
import photo from "../../../assets/images/MyImage.png"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-around" gap="30px">
                    <TextWrapper direction='column' align='flex-start'>
                        <MainTitle>Elias is a <span>web designer</span> and <span>front-end</span> developer</MainTitle>
                        <Paragraph children={textData.main.paragraph}/>
                        <StyledBtn type='submit'>Contact me!!</StyledBtn>
                    </TextWrapper>
                    <FlexWrapper direction='column'>
                        <Photo src={photo} width='457px' height='386px' alt=""/>
                        <PortfolioMessage>
                            <ColorBlock/>
                            Currently working on <span>Portfolio</span>
                        </PortfolioMessage>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    max-height: 630px;
    height: 100%;
    margin-bottom: 112px;
`

const TextWrapper = styled(FlexWrapper)`
    text-align: left;
    p {
        margin-bottom: 25px;
        line-height: 1.5625;
    }
`

const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 32px;
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