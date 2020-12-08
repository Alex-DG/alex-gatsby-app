import React, { useState } from 'react'

import { useTransition, animated, config } from 'react-spring'
import styled, { ThemeProvider } from 'styled-components'
import App from '../components/App'

import Loader from '../components/Loader'
import Particles from '../components/Particles'

import { GlobalStyles } from '../config/styles/globalStyles'

import {
  DARK_THEME,
  LIGHT_THEME,
  defaultTheme,
  lightTheme,
  darkTheme,
} from '../config/styles/themes'

const AnimatedDiv = styled(animated.div)`
  position: absolute;
  z-index: 1;
`

const IndexPage = () => {
  const [theme, setTheme] = useState(defaultTheme)
  const [index, set] = useState(0)

  const themeToggler = () =>
    theme === LIGHT_THEME ? setTheme(DARK_THEME) : setTheme(LIGHT_THEME)

  const slides = [
    <Loader onClose={() => set(index + 1)} />,
    <App {...{ themeToggler }} />,
  ]

  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  return (
    <ThemeProvider theme={theme === LIGHT_THEME ? lightTheme : darkTheme}>
      <GlobalStyles />
      <main>
        {transitions.map(({ item, props, key }) => {
          const view = slides[item]

          return (
            <AnimatedDiv
              className="animated-slide"
              key={key}
              style={{
                ...props,
              }}
            >
              {view}
            </AnimatedDiv>
          )
        })}

        <Particles />
      </main>
    </ThemeProvider>
  )
}

export default IndexPage
