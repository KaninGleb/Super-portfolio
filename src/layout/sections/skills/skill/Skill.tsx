import styled from "styled-components";

type SkillPropsType = {
    title: string
    description: string[]
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>

            <SkillDescription>
                {props.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </SkillDescription>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    
    border: 1px solid #abb2bf;
    padding: 8px 0;
    min-width: 178px;
    min-height: 103px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const SkillTitle = styled.h2`
    
`

const SkillDescription = styled.ul`
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #abb2bf;
`