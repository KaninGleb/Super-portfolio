import styled from "styled-components";
import {Menu} from "../../../../components/menu/Menu.tsx";

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
    
`

const Image = styled.img`
    
`

const Title = styled.h3`
    
`

const Text = styled.span`
    
`

const Link = styled.a`
    
`