import React from 'react'

import { DetailsContainer } from './styles'

const Details = () => {
  return (
    <DetailsContainer>
      <h1 className="names">Alexandre Di Guida</h1>

      <h2 className="role">
        {'< '}Front End{' >'}
      </h2>
      <h2 className="role">Web ~ Mobile App</h2>
      <h2 className="dev">[ Developer ]</h2>
    </DetailsContainer>
  )
}

export default Details
