import React, {useEffect} from "react";
import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {FlexWrapper} from "./FlexWrapper.tsx";
import {TextField} from "./TextField.tsx";
import {TextAreaField} from "./TextAreaField.tsx";

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden !important';
        } else {
            document.body.style.overflow = 'auto !important';
        }

        return () => {
            document.body.style.overflow = 'auto !important';
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent direction={'column'} gap={'16px'} onClick={(e) => e.stopPropagation()}>
                <InputsWrapper>
                    <TextField id='name' type='text' labelText='Name' placeholder={'Name'}/>
                    <TextField id='email' type='email' labelText='Email' placeholder={'Email'}/>
                </InputsWrapper>
                <TextField id='title' type='text' labelText='Title' placeholder={'Title'}/>
                <TextAreaField id='message' labelText='Message' placeholder={'Message'}/>
                <SendButton type="submit">Send</SendButton>
            </ModalContent>
        </ModalOverlay>
    )
}

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    @media ${theme.media.tablet} {
        padding: 0 16px;
    }

    @media ${theme.media.mobile} {
        font-size: 16px;
    }
`

const ModalContent = styled(FlexWrapper)`
    background-color: ${theme.colors.primaryBg};
    padding: 32px;
    border-radius: 8px;
    max-width: 570px;
    width: 100%;
    @media ${theme.media.mobile} {
        padding: 20px;
    }
`

const InputsWrapper = styled(FlexWrapper)`
    gap: 16px;

    @media ${theme.media.mobile} {
        flex-direction: column;
    }
`

const SendButton = styled.button`
    font-weight: 500;
    color: ${theme.colors.primaryText};
    font-size: 16px;
    
    padding: 8px 16px;
    background-color: ${theme.colors.primaryBg};
    border: 1px solid ${theme.colors.secondaryOutline};
    max-width: 72px;
    transition: background-color 0.15s, transform 0.15s;
    
    &:hover {
        background-color: rgba(199, 120, 221, 0.2);
        transform: scale(1.03);
    }
`