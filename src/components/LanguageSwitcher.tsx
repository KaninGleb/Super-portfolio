import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {theme} from '../styles/Theme.tsx';

export const LanguageSwitcher = () => {
    // Todo: finish LanguageSwitcher
    const navigate = useNavigate();

    const switchLanguage = (lang: string) => {
        if (lang === 'ru') {
            navigate('/ru');
        } else {
            navigate('/');
        }
    }

    return (
        <LanguageSelect aria-label='Language change'>
            <option onClick={ () => switchLanguage('en') }>EN</option>
            <option onClick={ () => switchLanguage('ru') }>RU</option>
        </LanguageSelect>
    )
}

const LanguageSelect = styled.select`
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    
    border: none;
    background-color: transparent;
    color: ${theme.colors.primaryLightText};
    
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 10px;
    
    &:hover {
        color: ${theme.colors.primaryText};
    }

    option {
        color: ${theme.colors.primaryLightText};
        background-color: ${theme.colors.primaryBg};
    }

    &:focus-visible {
        outline: none;
    }
    
    @media ${theme.media.tablet} {
        color: ${theme.colors.primaryBg};

        option {
            color: ${theme.colors.primaryText};
            background-color: ${theme.colors.primaryBg};
        }
    }
`