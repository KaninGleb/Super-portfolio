import styled from "styled-components";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {SocialList} from "../../../components/SocialList.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Media = () => {
    return (
        <StyledMedia>
            <HeaderSEO>
                Kanin Gleb, Gleb Kanin, KaninGleb, Portfolio, Frontend Developer, UI/UX Designer, Web Development, Responsive Design, JavaScript, React, HTML, CSS, Bootstrap, Tailwind CSS,
                Figma, Adobe XD, User Experience, User Interface, Cross-Browser Compatibility, Version Control (Git), GitHub Pages Agile Methodologies,
                RESTful APIs, Mobile-First Design, Performance Optimization, SEO Best Practices, Accessibility (a11y), Wireframing,
                Prototyping, Graphic Design, Animation, CSS Preprocessors (Sass, Less), TypeScript, Frontend Frameworks, Code Reviews, Interview, Mock interview

                Канин Глеб, Глеб Канин, Портфолио, Фронтенд-разработчик, UI/UX дизайнер, Веб-разработка, Адаптивный дизайн, JavaScript, React, HTML, CSS, Bootstrap, Tailwind CSS,
                Figma, Adobe XD, Пользовательский опыт, Пользовательский интерфейс, Кросс-браузерная совместимость, Контроль версий (Git),
                Гибкие методологии, RESTful API, Мобильный дизайн, Оптимизация производительности, Лучшие практики SEO, Доступность (a11y), Гитхаб,
                Проведение каркасных макетов, Прототипирование, Графический дизайн, Анимация, Препроцессоры CSS (Sass, Less), TypeScript,
                Фреймворки фронтенда, Код-ревью, Интервью, Собеседование, Мок-собеседование
            </HeaderSEO>
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
    )
}

const HeaderSEO = styled.h1`
    display: none;
`

const StyledMedia = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    
    position: fixed;
    top: 0;
    left: 17px;
    z-index: 3;
    
    @media ${theme.media.mediaOff} {
        display: none;
    }
`