import React from 'react'
import Particles from 'react-tsparticles'
import styled from 'styled-components'

import { defaultOptions } from './options'

const StyledParticles = styled(Particles)`
  position: fixed;

  width: 100%;
  height: 100%;
`

const ParticlesWrapper = () => {
  return <StyledParticles {...{ options: defaultOptions }} />
}

export default ParticlesWrapper
