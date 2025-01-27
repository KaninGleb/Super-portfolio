import styled from "styled-components";
import {Link} from "../../components/Link.tsx";
import {theme} from "../../styles/Theme.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

type LinkPropsType = {
    href: string
    children: string
    color?: string
    outlineColor?: string
    mWidth?: string
}

type ProjectPropsType = {
    src?: string
    software: string[]
    title: string
    text: string
    links: LinkPropsType[]
    maxWidth?: string
}

export const SmallProject = (props: ProjectPropsType) => {
    return (
        <StyledWork maxWidth={props.maxWidth}>
            <SizeWrapper>
                <Software>
                    {props.software.map((software, index) => (
                        <li key={index}>{software}</li>
                    ))}
                </Software>
                <StyledHr/>
                <MainSizeWrapper direction="column" gap='16px'>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <ButtonsFlexWrapper>
                        {props.links.map((link, index) => (
                            <Link
                                key={index}
                                children={link.children}
                                color={link.color}
                                outlineColor={link.outlineColor}
                                mWidth={link.mWidth}
                            />
                        ))}
                    </ButtonsFlexWrapper>
                </MainSizeWrapper>
            </SizeWrapper>
        </StyledWork>
    )
}

const StyledWork = styled.div<{maxWidth?: string}>`
    outline: 1px solid ${theme.colors.primaryOutline};
    min-width: 330px;
    max-width: ${props => props.maxWidth || '490px'};
    width: 100%;
    height: 100%;
    transition: 0.3s;
    cursor: default;
    
    &:hover {
        scale: 1.02;
    }

    @media ${theme.media.width1044} {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 238px;
        max-width: unset;
    }

    @media ${theme.media.tablet} {
        &:hover {
            scale: none;
        }
    }
    
    @media ${theme.media.mobile} {
        max-width: unset;
    }
`

const SizeWrapper = styled.div`
    padding: 8px;
`

const MainSizeWrapper = styled(FlexWrapper)`
    margin: 16px 8px 8px;
`

const Software = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 16px 8px;
    color: ${theme.colors.primaryLightText};
`

const StyledHr = styled.hr`
    border: none;
    height: 1px;
    background-color: ${theme.colors.primaryOutline};
    margin: 8px -8px;
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 24px;
    transition: 0.2s;
`

const Text = styled.span`
    color: ${theme.colors.primaryLightText};
    transition: 0.2s;
`

const ButtonsFlexWrapper = styled(FlexWrapper)`
    gap: 16px;
    
    @media ${theme.media.width1044} {
        flex-wrap: wrap;
    }
`