import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/Theme.tsx";
import {gradientAnimation, shakeAnimation} from "../../../../animations/animations.ts";

type LinkPropsType = {
    href: string
    children: string
    color?: string
    outlineColor?: string
    mWidth?: string
};

type ProjectPropsType = {
    src: string
    software: string[]
    title: string
    text: string
    links: LinkPropsType[]
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledWork>
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
                    <FlexWrapper gap="16px">
                        {props.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                children={link.children}
                                color={link.color}
                                outlineColor={link.outlineColor}
                                mWidth={link.mWidth}
                            />
                        ))}
                    </FlexWrapper>
                </MainSizeWrapper>
            </SizeWrapper>
        </StyledWork>
    );
};

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

const StyledWork = styled.div`
    outline: 1px solid ${theme.colors.primaryOutline};
    max-width: 330px;
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
`

const StyledImageWrapper = styled.div`
    width: 100%;
    height: 201px;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-bottom: 1px solid ${theme.colors.primaryOutline};
    object-fit: cover;
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
    gap: 8px;
    color: ${theme.colors.primaryLightText};
    cursor: default;

    li {
        transition: 0.2s;
    }

    li:hover {
        animation: ${shakeAnimation} 0.5s ease-in-out;
    }
`;


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

    &:hover {
        animation: ${shakeAnimation} 0.5s ease-in-out;
    }
`

const Text = styled.span`
    color: ${theme.colors.primaryLightText};
    transition: 0.2s;
    
    &:hover {
        animation: ${shakeAnimation} 0.5s ease-in-out;
    }
`
