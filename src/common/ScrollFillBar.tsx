import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { theme } from '../styles/Theme.tsx'

type ScrollFillProps = {
  width: number
}

export const ScrollFillBar: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0)

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPosition = window.scrollY
    const screenWidth = window.innerWidth
    const percent = (scrollPosition / totalHeight) * screenWidth
    setScrollPercent(percent)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ScrollBarContainer>
      <AnimatedScrollFill
        width={scrollPercent}
        initial={{ width: 0 }}
        animate={{ width: scrollPercent }}
        transition={{ duration: 0.2 }}
      />
    </ScrollBarContainer>
  )
}

const ScrollBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  z-index: 10;
`

const AnimatedScrollFill = styled(motion.div)<ScrollFillProps>`
  height: 100%;
  background: ${theme.colors.secondaryOutline};
`
