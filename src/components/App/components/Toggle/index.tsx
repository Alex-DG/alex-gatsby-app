import React from 'react'

import { ToggleContainer } from './styles'

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Toggle = (props: ToggleProps) => (
  <ToggleContainer>
    <div id="toggle-btn">
      <input type="checkbox" {...props} />
      <span></span>
    </div>
  </ToggleContainer>
)

export default Toggle
