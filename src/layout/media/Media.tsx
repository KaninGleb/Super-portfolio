import styled from "styled-components";
import {DecorativeLine} from "../../components/DecorativeLine.tsx";
import {SocialList} from "../../components/SocialList.tsx";
import {theme} from "../../styles/Theme.tsx";

export const Media = () => {
    return (
        <StyledMedia>
            <DecorativeLine width={'2px'}
                            height={'191px'}
                            bgColor={theme.colors.primaryOutline}
                            marginL={'0'}/>
            <SocialList displayFlex={true}
                        direction={'column'}
                        gap={'8px'}
                        iconIds={['git', 'discord', 'figma']}
                        showIcon={true} />
        </StyledMedia>
    );
};

const StyledMedia = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    
    position: fixed;
    top: 0;
    left: 17px;
`