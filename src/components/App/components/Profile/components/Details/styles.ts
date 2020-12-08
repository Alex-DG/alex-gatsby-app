import styled from 'styled-components'
import Colors from '../../../../../../config/styles/colors'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2em 0 0;

  .resume {
    text-decoration: none;
  }

  /** PROFILE DETAILS */
  .names,
  .role,
  .dev {
    transition: 0.2s all ease-in-out;

    text-align: center;
  }

  .role,
  .dev {
    font-size: calc(1em + 1vw);
    font-family: 'Movement';
    margin: 4px 0;
  }

  .names {
    font-size: calc(1em + 1vw);
    font-family: 'Space Grotesk';

    /* Handle border bottom position */
    padding-bottom: 0.5em;
    border-bottom: 2px solid ${Colors.PRIMARY};
  }
`
