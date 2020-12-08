import React from 'react'
import AnimatedGeometry from './components/AnimatedGeometry'
import Profile from './components/Profile'
import Toggle from './components/Toggle'

import { AppContainer } from './styles'

type AppProps = {
  themeToggler: () => void
}

const App = ({ themeToggler }: AppProps) => (
  <AppContainer>
    <Toggle onClick={themeToggler} />

    <div className="left">
      <Profile />
    </div>

    <div className="right">
      <AnimatedGeometry />
    </div>
  </AppContainer>
)

export default App
