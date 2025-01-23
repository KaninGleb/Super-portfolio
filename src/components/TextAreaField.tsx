import React from "react";
import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const TextAreaField: React.FC<{
    id: string,
    labelText: string,
    placeholder: string
    }> = ({labelText, id, placeholder}) => {

    return (
        <StyledTextAreaField>
            <textarea id={id} placeholder={placeholder}/>
            <label htmlFor={id}>{labelText}</label>
        </StyledTextAreaField>
    )
}

const StyledTextAreaField = styled.div`
    color: ${theme.colors.primaryLightText};
    position: relative;
    
    textarea {
        font-family: "Fira Code", sans-serif;
        font-size: 16px;
        color: ${theme.colors.primaryLightText};

        border: 1px solid ${theme.colors.primaryOutline};
        padding: 8px;
        min-height: 120px;
        width: 100%;
        background-color: inherit;
        resize: none;
    }

    textarea::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }

    textarea:focus-visible {
        border-radius: 0;
    }
    
    label {
        font-size: 16px;
        position: absolute;
        left: 8px;
        top: 9px;
        transition: 0.2s;
    }

    textarea:focus + label,
    textarea:not(:placeholder-shown) + label {
        padding: 0 4px;
        color: ${theme.colors.primaryText};
        font-weight: 400;
        background-color: ${theme.colors.primaryBg};
        transform: translateY(-20px) translateX(-3px);
    }
    
    textarea::placeholder {
        opacity: 0;
    }
`