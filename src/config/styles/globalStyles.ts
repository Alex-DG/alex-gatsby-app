import { createGlobalStyle } from 'styled-components'

import { GlobalStyleProps } from '../types'

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  body {
    color: ${({ theme }) => theme.text};

    .social-link {
      color: ${({ theme }) => theme.icon};
      opacity: ${({ theme }) => theme.icon_opacity};

      :hover {
        color: ${({ theme }) => theme.icon_hover};
      }
    }

    .left {
      background-color: ${({ theme }) => theme.background};
    }

    .animated-slide {
      height: 100%;
      width: 100%;
      position: absolute;
    }

    transition: all 0.5 linear;
  }
`
