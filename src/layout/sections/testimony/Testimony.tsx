import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import quotationMark from "../../../assets/images/quotation-mark.svg"
import {font} from "../../../styles/CommonFont.tsx";
import pseudo from "../../../assets/images/sections-pseudo/pseudo-right-1.svg"

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper justify="center">
                    <StyledFlexWrapper direction="column" align="flex-end">
                        {/*<QuotationMarkBefore src={quotationMark} alt="Quotation mark before"/>*/}
                        <StyledQuote>With great power comes great electricity bill</StyledQuote>
                        <StyledCite>- Dr. Who</StyledCite>
                        {/*<QuotationMarkAfter src={quotationMark} alt="Quotation mark after"/>*/}
                    </StyledFlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    font-size: 24px;
    margin-bottom: 74px;
    position: relative;
    //overflow: hidden;
    
    &::after {
        content: "";
        background-image: url("${pseudo}");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        right: -9px;
        width: 91px;
        height: 91px;
    }
    
    @media ${theme.media.width1044} {
        &::after {
            display: none;
        }
    }
    
    @media ${theme.media.mobile} {
        margin-bottom: 50px;
    }
`

const StyledFlexWrapper = styled(FlexWrapper)`
    position: relative;
`

// const QuotationMarkBefore = styled.img`
//     position: absolute;
//     top: -14px;
//     left: 10px;
//     max-height: 30px;
// `

const StyledQuote = styled.blockquote`
    ${font({weight:500, Fmax: 24, Fmin:16})};
    border: 1px solid ${theme.colors.primaryOutline};
    padding: 32px;
    max-width: 714px;
    width: 100%;
    
    &::before {
        content: "";
        background-image: url("${quotationMark}");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        max-width: 42px;
        width: 100%;
        height: 100%;
        top: -14px;
        left: 10px;
        max-height: 30px;
        z-index: 1;
    }
    
    @media ${theme.media.tablet} {
        max-width: fit-content;
        padding: 26px;
        line-height: 1.625;
    }

    @media ${theme.media.mobile} {
        padding: 15px;
    }
`

// const QuotationMarkAfter = styled.img`
//     position: absolute;
//     top: 80px;
//     right: 12px;
//     max-height: 30px;
// `

const StyledCite = styled.cite`
    ${font({weight:500, Fmax: 24, Fmin:16})};
    border: 1px solid ${theme.colors.primaryOutline};
    border-top: none;
    padding: 16px;

    &::before {
        content: "";
        background-image: url("${quotationMark}");
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        max-width: 42px;
        width: 100%;
        height: 100%;
        top: 80px;
        right: 12px;
        max-height: 30px;
    }

    @media ${theme.media.tablet} {
        padding: 14px;
    }
`