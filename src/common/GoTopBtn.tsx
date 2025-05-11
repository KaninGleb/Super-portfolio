import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {theme} from '../styles/Theme.tsx';
import {Icon} from './Icon.tsx';
import {GoTopBtnSlideIn} from "../animations/animations.ts";

export const GoTopBtn = () => {
    const [showBtn, setShowBtn] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY && currentScrollY > 150) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        showBtn && (
            <StyledGoTopBtn
                onClick={() => { scroll.scrollToTop({
                    duration: 1,
                    smooth: 'easeInOutQuint',
                })
            }}>
                <Icon
                    iconId={'arrowGoToTop'}
                    height={'15'}
                    width={'16'}
                    viewBox={'0 0 16 15'}/>
            </StyledGoTopBtn>
        )
    )
}

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
    animation: ${GoTopBtnSlideIn} 0.5s forwards;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        scale: 1.1;
    }

    @media ${theme.media.tablet} {
        &:hover {
            background-color: inherit;
            scale: none;
        }
    }
`