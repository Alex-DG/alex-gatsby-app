import styled, { css } from 'styled-components'

import Colors from '../../config/styles/colors'

const flexStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LottieContainer = styled.div`
  .fade-in-container {
    ${flexStyle};

    height: 100vh;
  }

  h1,
  .trails-main span {
    font-size: calc(1.2em + 1vw);
    font-family: 'Movement';
    color: ${Colors.SECONDARY};
  }

  .trails-main {
    ${flexStyle};

    > :first-child {
      font-style: italic;
    }
    > :nth-child(2) {
      font-weight: bold;
    }
  }
`
