import styled from 'styled-components'

import Breakpoints from '../../config/styles/breakpoints'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;

  min-height: 100%;
  min-width: 100%;

  .left {
    width: 40%;
    padding: 0 0.8em;
    z-index: 1;
  }
  .right {
    width: 60%;
    z-index: 1;
  }

  .shape-canvas {
    display: block;
  }

  @media only screen and (max-width: ${Breakpoints.small}) {
    .left {
      position: relative;

      margin: 25% auto;

      border-radius: 10px;

      width: 62%;
      height: 90%;
      padding: 3em 1em;
    }

    .right {
      position: fixed;

      top: 0;
      left: 0;

      width: 100%;
    }

    .shape-canvas {
      display: none;
    }
  }
`
