import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import emailJS from '@emailjs/browser';
import {theme} from "@/styles/Theme.tsx";
import {FlexWrapper} from "../Layout/FlexWrapper.tsx";
import {Field} from "./Field/Field.tsx";
import {TextAreaField} from "./TextAreaField/TextAreaField.tsx";
import {font} from '@/styles';
import {modalFadeInUp} from "../../styles/animations/animations.ts";
import {contentData} from '../../app/appData.ts';

type ModalPropsType = {
    isVisible: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalPropsType> = ({isVisible, onClose}) => {
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
            <ModalContent
                onClick={(e) => e.stopPropagation()}
                ref={form} onSubmit={sendEmail}
            >
                <ContactTitle>{contentData.modal.header}</ContactTitle>
                <InputsWrapper>
                    <Field
                        id='name'
                        type='text'
                        labelText={contentData.modal.name}
                        placeholder={contentData.modal.name}
                        name={'user_name'}
                        area-label='Name'
                    />
                    <Field
                        id='email'
                        type='email'
                        labelText={contentData.modal.email}
                        placeholder={contentData.modal.email}
                        name={'user_email'}
                        spellCheck={false}
                        area-label='Email'
                    />
                </InputsWrapper>
                <Field
                    id='title'
                    type='text'
                    labelText={contentData.modal.title}
                    placeholder={contentData.modal.title}
                    name={'subject'}
                    area-label='Title'
                />
                <TextAreaField
                    id='message'
                    labelText={contentData.modal.message}
                    placeholder={contentData.modal.message}
                    name={'message'}
                    area-label='Message'
                />
                <SendButton type="submit">{contentData.modal.sendBtn}</SendButton>
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

const ModalContent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: ${theme.colors.primaryBg};
    padding: 16px 32px 32px;
    border-radius: 8px;
    max-width: 570px;
    width: 100%;
    animation: ${modalFadeInUp} .4s forwards;
    
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