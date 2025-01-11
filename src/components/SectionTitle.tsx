import styled from "styled-components";

export const sections = {
    skills: {
        id: 'skills',
        name: 'skills',
        symbol: '#'
    },
    works: {
        id: 'works',
        name: 'works',
        symbol: '#'
    },
    aboutMe: {
        id: 'about-me',
        name: 'about-me',
        symbol: '#'
    },
    contacts: {
        id: 'contacts',
        name: 'contacts',
        symbol: '#'
    }
};

type SectionTitlePropsType = {
    section: {
        id: string;
        name: string;
        symbol: string;
    };
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    return (
        <StyledSectionTitle id={props.section.id}>
            <span>{props.section.symbol}</span>{props.section.name}
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.h2`
    font-family: "Fira Code", sans-serif;
    font-weight: 500;
    font-size: 32px;
    color: #fff;
    
    span {
        color: #c778dd;
    }
`