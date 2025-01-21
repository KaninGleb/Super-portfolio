import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    min-height: 100%;
    margin: 0 auto;

    @media ${theme.media.width1044} {
        padding: 0 16px;
    }
`