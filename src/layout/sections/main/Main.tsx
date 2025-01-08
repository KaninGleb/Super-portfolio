import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Photo} from "../../../components/Photo.tsx";
import photo from "../../../assets/images/MyImage.png"
import {Container} from "../../../components/Container.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align="center" justify="space-around">
                    <div>
                        <MainTitle>Elias is a <span>web designer</span> and <br/>
                            <span>front-end</span> developer</MainTitle>
                        <p>He crafts responsive websites where technologies meet creativity</p>
                        <button>Contact me!!</button>
                    </div>
                    <FlexWrapper direction='column'>
                        <Photo src={photo} width='457px' height='386px' alt=""/>
                        <PortfolioMessage>
                            <div></div>
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
    background-color: #8d556a;
`

const MainTitle = styled.h1`
    font-family: "Fira Code", sans-serif;
    font-weight: 600;
    font-size: 32px;
    color: #fff;

    span {
        color: #c778dd;
    }
`

const PortfolioMessage = styled.span`
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #abb2bf;

    span {
        font-weight: 600;
        color: #ffffff;
    }
`