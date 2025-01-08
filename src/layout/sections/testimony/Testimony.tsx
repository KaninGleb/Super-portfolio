import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <blockquote>With great power comes great electricity bill</blockquote>
                    <cite>- Dr. Who</cite>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    
`