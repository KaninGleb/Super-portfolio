import styled from "styled-components";
import {Icon} from "./icon/Icon.tsx";

export const socialData = [
    { id: 'git', href: "#" },
    { id: 'figma', href: "#" },
    { id: 'discord', href: "#" },
]

type SocialListPropsType = {
    iconIds: string[];
    iconSize?: string;
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
            {props.iconIds.map(itemId => {
                const socialItem = socialData.find(item => item.id === itemId);

                return socialItem && (
                    <SocialItem key={itemId}>
                        <SocialLink href={socialItem.href} target='_blank'>
                            <Icon iconId={socialItem.id}
                                    width={props.iconSize || '32'}
                                    height={props.iconSize || '32'}
                                    viewBox={`0 0 32 32`}
                                    // viewBox={`0 0 ${props.iconSize || '32'} ${props.iconSize || '32'}`}

                            />
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
    display: inline-block;
`