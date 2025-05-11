import styled from "styled-components";
import {Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../common/Layout/Container.tsx";
import {font} from "../../styles/CommonFont.tsx";

export const NotFoundPage404 = () => {
    const [countdown, setCountdown] = useState(3);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setRedirect(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (redirect) {
        return <Navigate to="/" replace/>;
    }

    return (
        <Container>
            <Flex>
                <IssueNum>404</IssueNum>
                <Issue>Deployment NOT_FOUND</Issue>
                <IssueDescription>You will be redirected to the main page in {countdown} seconds...</IssueDescription>
            </Flex>
        </Container>
    );
}

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100vh;
`

const IssueNum = styled.span`
    ${font({weight: 600,
            Fmin: 100,
            Fmax: 300,
            color: theme.colors.secondaryText})};
`

const Issue = styled.span`
    ${font({weight: 600,
            Fmin: 26,
            Fmax: 36,
            color: theme.colors.secondaryText})};
    margin-bottom: 40px;
`

const IssueDescription = styled.p`
    ${font({Fmin: 14, Fmax: 26})};
`