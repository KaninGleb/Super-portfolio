import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {theme} from "../../styles/Theme.tsx";

interface ScrollFillProps {
    width: number
}

export const ScrollFillBar: React.FC = () => {
    const [scrollPercent, setScrollPercent] = useState<number>(0); // Указываем тип состояния

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const percent = (scrollPosition / totalHeight) * 100;
        setScrollPercent(percent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <ScrollBarContainer>
            <ScrollFill width={scrollPercent} />
        </ScrollBarContainer>
    )
}

const ScrollBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    width: 100%;
    z-index: 10;
`

const ScrollFill = styled.div<ScrollFillProps>`
    height: 100%;
    background: ${theme.colors.secondaryOutline};
    width: ${(props) => props.width}%;
`