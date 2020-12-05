import React, { useLayoutEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import styled from 'styled-components'

import useWindowSize from '../../config/hooks/useWindowSize'

import { defaultOptions } from './options'

const SMALL_SCREEN = 768

const MAX_PARTICLES = 160
const MIN_PARTICLES = 80

const StyledParticles = styled(Particles)`
  position: fixed;

  background-color: grey;

  width: 100%;
  height: 100%;
`

const ParticlesWrapper = () => {
  // const size = useWindowSize()

  // const [options, setOptions] = useState(defaultOptions)

  // useLayoutEffect(() => {
  //   const {
  //     particles,
  //     particles: {
  //       number,
  //       number: { value },
  //     },
  //   } = options

  //   const isSmallScreen = size?.width && size.width <= SMALL_SCREEN

  //   switch (isSmallScreen) {
  //     case true:
  //       const updatedParticles = {
  //         ...particles,
  //         number: { ...number, value: MAX_PARTICLES },
  //       }

  //       setOptions({
  //         ...options,
  //         particles: updatedParticles,
  //       })
  //       break
  //     default:
  //       if (value === MAX_PARTICLES) {
  //         setOptions({
  //           ...options,
  //           particles: {
  //             ...particles,
  //             number: { ...number, value: MIN_PARTICLES },
  //           },
  //         })
  //       }
  //   }

  //   // eslint-disable-next-line
  // }, [size])

  return <StyledParticles id="tsparticles" {...{ options: defaultOptions }} />
}

export default ParticlesWrapper
