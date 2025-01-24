import {animateScroll as scroll} from 'react-scroll';
import styled, {keyframes} from 'styled-components';
import {theme} from '../../styles/Theme.tsx';
import {Icon} from '../icon/Icon.tsx';
import {useEffect, useState} from 'react';

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
        // <div style={{  transition: `0.7s ease-in-out`,  transform: `translateY(${!showBtn ? '100px' : '-20px'})` }}>
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop({
                        duration: 1,
                        smooth: 'easeInOutQuint',
                    });
                }}>
                    <Icon iconId={'arrowGoToTop'} height={'15'} width={'16'} viewBox={'0 0 16 15'} />
                </StyledGoTopBtn>
            )}
        </>
        // </div>
    )
}

const slideIn = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`

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
    animation: ${slideIn} 0.5s forwards;

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