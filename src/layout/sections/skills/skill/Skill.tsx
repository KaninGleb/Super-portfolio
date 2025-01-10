import styled from "styled-components";
import {StyledHr} from "../../../../components/StyledHr.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {theme} from "../../../../styles/Theme.tsx";

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
    outline: 1px solid ${theme.colors.primaryBorder};
    padding: 8px;
    max-width: ${(props) => props.maxWidth || '180px'};
    height: 100%;;
`

const SkillTitle = styled.h3`
    font-size: 16px;
`

const SkillDescription = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
const FlexItem = styled.li`
    color: ${theme.colors.primaryLightText};
`;