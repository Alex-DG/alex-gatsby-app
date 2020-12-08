import styled from 'styled-components'
import Breakpoints from '../../../../../../config/styles/breakpoints'

const iconSize = `1.45em`

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin: 3em 0;
  width: 60%;

  a {
    * {
      height: ${iconSize};
      width: ${iconSize};
    }
  }

  @media only screen and (max-width: ${Breakpoints.small}) {
    width: 100%;
  }
`
