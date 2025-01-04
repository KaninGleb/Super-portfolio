import styled from "styled-components";

type ProjectPropsType = {
    title: string
    text: string
    src: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>

            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>Live &lt;~&gt;</Link>
            <Link href={"#"}>Cached &gt;=</Link>
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

const Title = styled.h3`
    
`

const Text = styled.span`
    
`

const Link = styled.a`
    
`