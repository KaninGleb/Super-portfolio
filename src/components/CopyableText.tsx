import {useState} from 'react';
import {Icon} from './icon/Icon.tsx';
import styled from 'styled-components';
import {theme} from '../styles/Theme.tsx';

type CopyableTextPropsType = {
    text: string
    textToCopy?: string
    iconId: string
    altIconId: string
}

export const CopyableText = ({ text, iconId, altIconId, textToCopy }: CopyableTextPropsType) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy || text).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        })
    }

    return (
        <StyledCopyableText onClick={handleCopy}>
            <span>{text}</span>
            {isCopied ? (
                <Icon
                    iconId={altIconId}
                    width={'32px'}
                    height={'32px'}
                    viewBox={'0 0 32 32'}/>
            ) : (
                <Icon
                    iconId={iconId}
                    width={'32px'}
                    height={'32px'}
                    viewBox={'0 0 32 32'}/>
            )}
            <TextToCopy>{textToCopy}</TextToCopy>
        </StyledCopyableText>
    )
}

const StyledCopyableText = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    color: ${theme.colors.primaryLightText};
    transition: 0.2s ease;
    
    &:hover {
        transform: translateY(-3px);
        fill: red;
        span {
            color: ${theme.colors.primaryText};
        }
    }
`

const TextToCopy = styled.span`
    display: none;
`