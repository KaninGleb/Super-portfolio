import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/Theme.tsx";

type LinkPropsType = {
    href: string;
    children: string;
    color: string;
    borderColor?: string;
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
            <Image src={props.src} alt=""/>
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
                                borderColor={link.borderColor}
                            />
                        ))}
                    </FlexWrapper>
                </MainSizeWrapper>
            </SizeWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    outline: 1px solid ${theme.colors.primaryBorder};
    max-width: 330px;
    width: 100%;
    height: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 201px;
    border-bottom: 1px solid ${theme.colors.primaryBorder};
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
`

const StyledHr = styled.hr`
    border: none;
    height: 1px;
    background-color: #abb2bf;
    margin: 8px -8px;
`

const Title = styled.h3`
    font-weight: 500;
    font-size: 24px;
`

const Text = styled.span`
    color: ${theme.colors.primaryLightText};
`