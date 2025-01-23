import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {Icon} from "./icon/Icon.tsx";

export const socialData = [
    { id: 'git', href: "https://github.com/", areaLabel: 'Link to GitHub'},
    { id: 'figma', href: "https://www.figma.com/", areaLabel: 'Link to Figma'},
    { id: 'discord', href: "https://discord.com/", areaLabel: 'Link to Discord'},
    { id: 'email', href: "https://mail.google.com/", areaLabel: 'Link to Gmail'},
]

type SocialListPropsType = {
    iconIds: string[]
    showIcon?: boolean
    iconsTitles?: string[]
    iconSize?: string
    displayFlex?: boolean
    direction?: string
    wrap?: string
    gap?: string
    gapBetween?: string
}

type FlexPropsType = {
    displayFlex?: boolean
    direction?: string
    wrap?: string
    gap?: string
}

type StyledIconPropsType = {
    gapBetween?: string
}

export const SocialList = (props: SocialListPropsType) => {
    return (
        <StyledSocialList displayFlex={props.displayFlex}
                            direction={props.direction}
                            wrap={props.wrap}
                            gap={props.gap}>
            {props.iconIds.map((itemId, index) => {
                const socialItem = socialData.find(item => item.id === itemId);
                const title = props.iconsTitles ? props.iconsTitles[index] : ''

                return socialItem && (
                    <SocialItem key={itemId}>
                        <SocialLink href={socialItem.href}
                                    target='_blank'
                                    aria-label={socialItem.areaLabel}
                                    gapBetween={props.gapBetween}>
                            {props.showIcon && (
                                <Icon iconId={socialItem.id}
                                        width={props.iconSize || '32'}
                                        height={props.iconSize || '32'}
                                        viewBox={`0 0 32 32`}
                                />
                            )}
                            <IconTitle>{title}</IconTitle>
                        </SocialLink>
                    </SocialItem>
                )
            })}
        </StyledSocialList>
    );
};

const StyledSocialList = styled.ul<FlexPropsType>`
    display: ${props => props.displayFlex ? 'flex' : ''};
    flex-direction: ${props => props.direction || undefined};
    flex-wrap: ${props => props.wrap || undefined};
    gap: ${props => props.gap || undefined};
`

const SocialItem = styled.li`
    max-height: 32px;
    
    @media ${theme.media.tablet} {
        max-height: 64px;
    }
`

const SocialLink = styled.a<StyledIconPropsType>`
    display: inline-flex;
    align-items: center;
    gap: ${props => props.gapBetween};
    
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
    color: ${theme.colors.primaryLightText};
`