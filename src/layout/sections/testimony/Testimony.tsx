import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import quotationMark from "../../../assets/images/quotation-mark.svg"
import {font} from "../../../styles/CommonFont.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper justify="center">
                    <StyledFlexWrapper direction="column" align="flex-end">
                        <QuotationMarkBefore src={quotationMark} alt="Quotation mark before"/>
                        <StyledQuote>With great power comes great electricity bill</StyledQuote>
                        <StyledCite>- Dr. Who</StyledCite>
                        <QuotationMarkAfter src={quotationMark} alt="Quotation mark after"/>
                    </StyledFlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    font-size: 24px;
    margin-bottom: 74px;
`
const StyledFlexWrapper = styled(FlexWrapper)`
    position: relative;
`

const QuotationMarkBefore = styled.img`
    position: absolute;
    top: -14px;
    left: 10px;
    max-height: 30px;
`

const StyledQuote = styled.blockquote`
    ${font({weight:500, Fmax: 24, Fmin:16})};
    border: 1px solid ${theme.colors.primaryOutline};
    padding: 32px;
    max-width: 714px;
    width: 100%;
    //position: relative;
    //z-index: -1;
    
    //&::before {
    //    content: '';
    //    background-image: url('../../../assets/images/quotation-mark.svg');
    //    background-size: contain;
    //    background-repeat: no-repeat;
    //    position: absolute;
    //    top: 10px;
    //    left: 0px;
    //    width: 30px;
    //    height: 30px;
    //    z-index: 1;
    //}
`

const QuotationMarkAfter = styled.img`
    position: absolute;
    top: 80px;
    right: 12px;
    max-height: 30px;
`

const StyledCite = styled.cite`
    ${font({weight:500, Fmax: 24, Fmin:16})};
    border: 1px solid ${theme.colors.primaryOutline};
    border-top: none;
    padding: 16px;
`