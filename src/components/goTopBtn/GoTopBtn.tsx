import {animateScroll as scroll} from 'react-scroll'
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {useEffect, useState} from "react";
import {theme} from "../../styles/Theme.tsx";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
    }, []);

    return (
        <>
            {showBtn && (
                <div>
                    <StyledGoTopBtn className={'bg-media-off'} onClick={() => {
                        scroll.scrollToTop({
                            duration: 1,
                            smooth: "easeInOutQuint"
                        })
                    }}>
                        <Icon iconId={'arrowGoToTop'} height={'15'} width={'16'} viewBox={'0 0 16 15'}/>
                    </StyledGoTopBtn>
                </div>
            )}
        </>
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
    transition: .2s ease-in-out;
    
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