import styled from "styled-components";
import {Navigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {theme} from "../../styles/Theme.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

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
        <FlexWrapper direction="column" justify="center" align="center">
            <Issue>404 - Deployment NOT_FOUND</Issue>
            <IssueDescription>You will be redirected to the main page in {countdown} seconds...</IssueDescription>
        </FlexWrapper>
    );
}

const Issue = styled.span`
    font-family: "Fira Code", sans-serif;
    font-weight: 600;
    font-size: 32px;
    color: ${theme.colors.secondaryText}
`

const IssueDescription = styled.p`
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 24px;
    color: ${theme.colors.primaryText}
`