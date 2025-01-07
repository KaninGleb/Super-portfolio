import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type LinkPropsType = {
    href: string;
    children: string;
    color: string;
    borderColor?: string;
};

type ProjectPropsType = {
    src: string
    software: string
    title: string
    text: string
    links: LinkPropsType[]
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Software>{props.software}</Software>
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
        </StyledWork>
    );
};

const StyledWork = styled.div`
    max-width: 330px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 201px;
`

const Software = styled.span`
    
`

const Title = styled.h3`
    
`

const Text = styled.span`
    
`