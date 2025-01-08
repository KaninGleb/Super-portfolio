import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
// import quotationMark from "../../../assets/images/quotation-mark.svg"

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper justify="center">
                    <FlexWrapper direction="column" align="flex-end">
                        <StyledQuote>With great power comes great electricity bill</StyledQuote>
                        <StyledCite>- Dr. Who</StyledCite>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    font-size: 24px;
    margin-bottom: 74px;
`

const StyledQuote = styled.blockquote`
    font-weight: 500;
    
    border: 1px solid ${theme.colors.primaryBorder};
    padding: 32px;
    max-width: 714px;
    width: 100%;
    max-height: 95px;
    height: 100%;
    position: relative;

    &::before {
        content: '';
        background-color: ${theme.colors.primaryBg};
        background-image: url("data:image/svg+xml;utf8,<svg width='26' height='21' viewBox='0 0 26 21' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.56 15.616C10.56 17.0453 10.0373 18.2507 8.992 19.232C7.968 20.2133 6.72 20.704 5.248 20.704C3.73333 20.704 2.47467 20.2133 1.472 19.232C0.490667 18.2507 0 17.0453 0 15.616C0 14.9333 0.096 14.208 0.288 13.44C0.48 12.672 0.864 11.68 1.44 10.464L6.4 0H11.2L8.544 11.584C9.14133 12.0107 9.62133 12.576 9.984 13.28C10.368 13.9627 10.56 14.7413 10.56 15.616ZM24.8 15.616C24.8 17.0453 24.2773 18.2507 23.232 19.232C22.1867 20.2133 20.9387 20.704 19.488 20.704C18.016 20.704 16.768 20.2133 15.744 19.232C14.7413 18.2507 14.24 17.0453 14.24 15.616C14.24 14.9333 14.336 14.208 14.528 13.44C14.72 12.672 15.1147 11.68 15.712 10.464L20.704 0H25.472L22.784 11.584C23.4027 12.0107 23.8933 12.576 24.256 13.28C24.6187 13.9627 24.8 14.7413 24.8 15.616Z' fill='%23ABB2BF'/></svg>");
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        top: -12px;
        left: 16px;
        width: 24px;
        height: 24px;
        background-size: contain;
        padding: 4px;
    }

    &::after {
        content: '';
        background-color: ${theme.colors.primaryBg};
        background-image: url("data:image/svg+xml;utf8,<svg width='26' height='21' viewBox='0 0 26 21' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.56 15.616C10.56 17.0453 10.0373 18.2507 8.992 19.232C7.968 20.2133 6.72 20.704 5.248 20.704C3.73333 20.704 2.47467 20.2133 1.472 19.232C0.490667 18.2507 0 17.0453 0 15.616C0 14.9333 0.096 14.208 0.288 13.44C0.48 12.672 0.864 11.68 1.44 10.464L6.4 0H11.2L8.544 11.584C9.14133 12.0107 9.62133 12.576 9.984 13.28C10.368 13.9627 10.56 14.7413 10.56 15.616ZM24.8 15.616C24.8 17.0453 24.2773 18.2507 23.232 19.232C22.1867 20.2133 20.9387 20.704 19.488 20.704C18.016 20.704 16.768 20.2133 15.744 19.232C14.7413 18.2507 14.24 17.0453 14.24 15.616C14.24 14.9333 14.336 14.208 14.528 13.44C14.72 12.672 15.1147 11.68 15.712 10.464L20.704 0H25.472L22.784 11.584C23.4027 12.0107 23.8933 12.576 24.256 13.28C24.6187 13.9627 24.8 14.7413 24.8 15.616Z' fill='%23ABB2BF'/></svg>");
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        bottom: -12px;
        right: 16px;
        width: 24px;
        height: 24px;
        background-size: contain;
    }
`

const StyledCite = styled.cite`
    border: 1px solid ${theme.colors.primaryBorder};
    border-top: none;
    padding: 16px;
`