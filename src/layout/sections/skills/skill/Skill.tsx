import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {StyledHr} from "../../../../components/StyledHr.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type SkillPropsType = {
    order?: number
    title: string
    description: string[]
    maxWidth?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill order={props.order} maxWidth={props.maxWidth}>
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

const StyledSkill = styled.div<{ order?: number; maxWidth?: string }>`
    order: ${props => props.order};
    outline: 1px solid ${theme.colors.primaryBorder};
    padding: 8px;
    max-width: ${(props) => props.maxWidth || '178px'};
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