import styled from 'styled-components';
import {theme} from '../styles/Theme.tsx';


// Todo: finish language switching
// const LanguageContext = createContext();

export const LanguageSwitcher = () => {
    // const {lang, setLang} = useContext(LanguageContext);

    return (
        <LanguageSelect aria-label='Language change'>
            <option onClick={() => {}}>EN</option>
            <option onClick={() => {}}>RU</option>

            {/*<option onClick={() => setLang('en')}>EN</option>*/}
            {/*<option onClick={() => setLang('ru')}>RU</option>*/}
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