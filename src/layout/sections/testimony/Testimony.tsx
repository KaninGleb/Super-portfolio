import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import quotationMark from "../../../assets/images/quotation-mark.svg"

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper justify="center">
                    <QuotationMarkBefore src={quotationMark} alt="Quotation mark before"/>
                    <FlexWrapper direction="column" align="flex-end">
                        <StyledQuote>With great power comes great electricity bill</StyledQuote>
                        <StyledCite>- Dr. Who</StyledCite>
                    </FlexWrapper>
                    <QuotationMarkAfter src={quotationMark} alt="Quotation mark after"/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    font-size: 24px;
    margin-bottom: 74px;
`

const QuotationMarkBefore = styled.img`
    position: relative;
    top: -14px;
    left: 55px;
    max-height: 30px;
    z-index: 1;
`

const StyledQuote = styled.blockquote`
    font-weight: 500;

    border: 1px solid ${theme.colors.primaryOutline};
    padding: 32px;
    max-width: 714px;
    width: 100%;
    max-height: 95px;
    height: 100%;
    position: relative;
`

const QuotationMarkAfter = styled.img`
    position: relative;
    top: 80px;
    right: 55px;
    max-height: 30px;
`

const StyledCite = styled.cite`
    border: 1px solid ${theme.colors.primaryOutline};
    border-top: none;
    padding: 16px;
`