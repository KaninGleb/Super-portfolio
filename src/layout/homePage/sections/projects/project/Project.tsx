import styled from "styled-components";
import {Link} from "../../../../../components/Link.tsx";
import {FlexWrapper} from "../../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../../styles/Theme.tsx";
import {gradientAnimation} from "../../../../../animations/animations.ts";

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

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledWork maxWidth={props.maxWidth}>
            <StyledImageWrapper>
                <Image src={props.src} alt=""/>
                <Overlay/>
            </StyledImageWrapper>
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
    );
}

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.3s ease;

    animation: ${gradientAnimation} 3s infinite;
`

const StyledWork = styled.div<{maxWidth?: string}>`
    outline: 1px solid ${theme.colors.primaryOutline};
    min-width: 330px;
    max-width: ${props => props.maxWidth || '490px'};
    width: 100%;
    height: 100%;
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
    cursor: default;
    
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        background-color: rgba(40, 44, 51, 0.1);

        ${Overlay} {
            opacity: 1;
        }
    }

    @media ${theme.media.width1044} {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 238px;
        max-width: unset;
        
    }
    
    @media ${theme.media.mobile} {
        max-width: unset;
    }
`

const StyledImageWrapper = styled.div`
    width: 100%;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-bottom: 1px solid ${theme.colors.primaryOutline};
    object-fit: cover;

    // &::after {
    //     content: '';
    //     position: absolute;
    //     background-color: ${theme.colors.primaryOutline};
    //     bottom: 0;
    //     width: 100%;
    //     height: 2px;
    // }
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
    cursor: default;
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