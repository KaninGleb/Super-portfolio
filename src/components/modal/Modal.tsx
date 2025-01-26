import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import emailJS from '@emailjs/browser';
import {theme} from "../../styles/Theme.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {Field} from "../Field.tsx";
import {TextAreaField} from "../TextAreaField.tsx";
import {font} from "../../styles/CommonFont.tsx";
import {Fade} from "react-awesome-reveal";

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({isVisible, onClose}) => {
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        emailJS
            .sendForm('service_si2p01q', 'template_72242se', form.current, {
                publicKey: '7Y_nT49sGzWyVq9lS',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    onClose();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                });
        e.currentTarget.reset();
    };

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <Fade direction={'up'} duration={400}>
            <ModalContent onClick={(e) => e.stopPropagation()}
                            ref={form} onSubmit={sendEmail}>
                <ContactTitle>Contact me</ContactTitle>
                <InputsWrapper>
                    <Field id='name'
                            type='text'
                            labelText='Name'
                            placeholder={'Name'}
                            name={'user_name'}
                    />
                    <Field id='email'
                            type='email'
                            labelText='Email'
                            placeholder={'Email'}
                            name={'user_email'}
                    />
                </InputsWrapper>
                <Field id='title'
                        type='text'
                        labelText='Title'
                        placeholder={'Title'}
                        name={'subject'}
                />
                <TextAreaField id='message'
                                labelText='Message'
                                placeholder={'Message'}
                                name={'message'}
                />
                <SendButton type="submit">Send message</SendButton>
            </ModalContent>
            </Fade>
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

const ModalContent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: ${theme.colors.primaryBg};
    padding: 16px 32px 32px;
    border-radius: 8px;
    max-width: 570px;
    width: 100%;
    @media ${theme.media.mobile} {
        padding: 20px;
    }
`

const ContactTitle = styled.h3`
    text-align: center;
    padding: 5px;
    ${font({weight: 500, Fmax: 24, Fmin: 22})}
    font-weight: 500;

    @media ${theme.media.mobile} {
        padding: 0;
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
    max-width: 150px;
    transition: background-color 0.15s, transform 0.15s;

    &:hover {
        background-color: rgba(199, 120, 221, 0.2);
        transform: scale(1.03);
    }
`