import React, { useLayoutEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import styled from 'styled-components'

import useWindowSize from '../../config/hooks/useWindowSize'

import { defaultOptions } from './options'

const StyledParticles = styled(Particles)`
  position: fixed;
  width: 100%;
  height: 100%;
`

const ParticlesWrapper = () => {
  return <StyledParticles id="tsparticles" {...{ options: defaultOptions }} />
}

export default ParticlesWrapper
