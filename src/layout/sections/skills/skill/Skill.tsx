import styled from "styled-components";
import {StyledHr} from "../../../../components/StyledHr.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type SkillPropsType = {
    title: string
    description: string[]
    maxWidth?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill maxWidth={props.maxWidth}>
            <SkillTitle>{props.title}</SkillTitle>
            <StyledHr/>
            <SkillDescription>
                <FlexWrapper gap='8px' wrap='wrap'>
                    {props.description.map((desc, index) => (
                        <FlexItem  key={index}>{desc}</FlexItem >
                    ))}
                </FlexWrapper>
            </SkillDescription>
        </StyledSkill>
    );
};

const StyledSkill = styled.div<{ maxWidth?: string }>`
    border: 1px solid #abb2bf;
    padding: 8px;
    max-width: ${(props) => props.maxWidth || '178px'};
    //max-height: 132px;
    height: 100%;

    //display: flex;
    //flex-direction: column;
    //flex-wrap: wrap;
`

const SkillTitle = styled.h2`
    font-family: "Fira Code", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
`

const SkillDescription = styled.ul`
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #abb2bf;

    display: flex;
    flex-wrap: wrap;
`
const FlexItem = styled.li`
    font-family: "Fira Code", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #abb2bf;
`;