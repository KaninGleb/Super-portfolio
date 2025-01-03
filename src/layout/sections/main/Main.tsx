import styled from "styled-components";
import photo from "../../../assets/images/MyImage.png"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <div>
                    <MainTitle>Elias is a <span>web designer</span> and <br/> <span>front-end</span> developer</MainTitle>
                    <p>He crafts responsive websites where technologies meet creativity</p>
                    <button>Contact me!!</button>
                </div>
                <FlexWrapper direction='column'>
                    <Photo src={photo} alt=""/>
                    <PortfolioMessage>
                        <div></div>
                        Currently working on <span>Portfolio</span>
                    </PortfolioMessage>
                </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper direction="column" align="flex-end">
                <blockquote >With great power comes great electricity bill</blockquote >
                <cite>- Dr. Who</cite >
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #ff9dff;
`

const Photo = styled.img`
    width: 457px;
    height: 386px;
    object-fit: cover;
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