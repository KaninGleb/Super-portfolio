import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyles} from "./styles/Global.styles.tsx";
import {SpeedInsights} from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyles/>
        <App/>
        <SpeedInsights/>
    </StrictMode>
)