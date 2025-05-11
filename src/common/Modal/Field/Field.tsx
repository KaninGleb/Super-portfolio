import React from "react";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

export const Field: React.FC<{
    id: string
    labelText: string
    type: 'text' | 'email' | 'textarea'
    placeholder: string
    name: string
    spellCheck?: boolean
    }> = ({labelText, type, id, placeholder, name, spellCheck}) => {

    return (
        <StyledTextField className='text-field'>
            <input required type={type} id={id} placeholder={placeholder} name={name} spellCheck={spellCheck}/>
            <label htmlFor={id}>{labelText}</label>
        </StyledTextField>
    )
}

const StyledTextField = styled.div`
    color: ${theme.colors.primaryLightText};
    position: relative;
    
    input {
        font-family: "Fira Code", sans-serif;
        font-size: 16px;
        color: ${theme.colors.primaryLightText};

        border: 1px solid ${theme.colors.primaryOutline};
        padding: 8px;
        min-height: 38px;
        width: 100%;
        background-color: inherit;
        transition: .2s;

        &:hover {
            border: 1px solid ${theme.colors.primaryText};
        }

        @media ${theme.media.tablet} {
            &:hover {
                border: 1px solid ${theme.colors.primaryOutline};
            }
        }
    }

    input:focus-visible {
        border-radius: 0;
    }
    
    label {
        font-size: 16px;
        position: absolute;
        left: 8px;
        top: 9px;
        transition: 0.2s;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
        padding: 0 4px;
        color: ${theme.colors.primaryText};
        font-weight: 400;
        background-color: ${theme.colors.primaryBg};
        transform: translateY(-20px) translateX(-3px);
    }
    
    input::placeholder {
        opacity: 0;
    }
`