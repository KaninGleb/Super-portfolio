import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {Icon} from "./icon/Icon.tsx";

export const socialData = [
    { id: 'git', href: "https://github.com/" },
    { id: 'figma', href: "https://www.figma.com/" },
    { id: 'discord', href: "https://discord.com/" },
    { id: 'email', href: "https://mail.google.com/" },
]

type SocialListPropsType = {
    iconIds: string[]
    iconsTitles?: string[]
    iconSize?: string
    display?: boolean
    direction?: string
    gap?: string
}

type FlexPropsType = {
    display?: boolean
    direction?: string
    gap?: string
}

export const SocialList = (props: SocialListPropsType) => {
    return (
        <StyledSocialList display={props.display}
                            direction={props.direction}
                            gap={props.gap}
        >
            {props.iconIds.map((itemId, index) => {
                const socialItem = socialData.find(item => item.id === itemId);
                const title = props.iconsTitles ? props.iconsTitles[index] : ''

                return socialItem && (
                    <SocialItem key={itemId}>
                        <SocialLink href={socialItem.href} target='_blank'>
                            <Icon iconId={socialItem.id}
                                    width={props.iconSize || '32'}
                                    height={props.iconSize || '32'}
                                    viewBox={`0 0 32 32`}
                                    // viewBox={`0 0 ${props.iconSize || '32'} ${props.iconSize || '32'}`}
                            />
                            {title && <IconTitle>{title}</IconTitle>}
                        </SocialLink>
                    </SocialItem>
                )
            })}
        </StyledSocialList>
    );
};

const StyledSocialList = styled.ul<FlexPropsType>`
    display: ${props => props.display ? 'flex' : ''};
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap || ''};
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    
    transition: 0.2s ease;
    &:hover {
        transform: translateY(-3px);
        color: ${theme.colors.primaryText};
        span {
            color: ${theme.colors.primaryText};
        }
    }
`

const IconTitle = styled.span`
    display: flex;
    align-items: center;
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.primaryLightText};
`