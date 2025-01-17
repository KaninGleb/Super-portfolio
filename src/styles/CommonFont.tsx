import {theme} from "./Theme.tsx";

export type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ( {family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || 'Fira Code'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primaryText};
    line-height: ${lineHeight || 1.3};
    font-size: clamp(${Fmin}px, calc( (100vw - 375px)/(1024 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`