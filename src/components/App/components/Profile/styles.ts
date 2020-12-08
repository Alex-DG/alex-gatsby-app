import styled, { css } from 'styled-components'
import FadeIn from 'react-fade-in'
import Breakpoints from '../../../../config/styles/breakpoints'

const loading = css`
  filter: blur(50px);
  /* this is needed so Safari keeps sharp edges */
  transform: scale(1);
`

export const ProfileContainer = styled(FadeIn)<{ isLoaded: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  flex-direction: column;
  > :nth-child(n) {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }

  figure {
    perspective: 1500px;

    ${({ isLoaded }) => (isLoaded ? 'opacity: 1' : loading)};

    img {
      display: block;

      height: auto;
      width: 170px;
      max-width: 100%;

      margin: 0 auto;

      @media only screen and (max-width: ${Breakpoints.small}) {
        width: 150px;
      }
      @media only screen and (min-width: ${Breakpoints.large}) {
        width: 240px;
      }

      transform: rotateX(10deg) rotateY(-18deg) rotateZ(3deg);
      border-radius: 0.25em;
      box-shadow: 2px 10px 30px hsla(0, 0%, 0%, 0.25);
      transition: 0.3s;
    }

    &:hover img {
      transform: rotate(0);
    }
  }
`
