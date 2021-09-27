/**
 * Components - Molecules - Stepper - Icon - Dotted Circle
 */

// React
import React from 'react'
import { bool, number } from 'prop-types'

// Style
import styled from 'styled-components'

const DottedCircle = ({ size, active }) => {
  return (
    <svg
      fill="none"
      height={`${size}`}
      viewBox={`0 0 ${size} ${size}`}
      width={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledCircle
        active={active}
        cx="12"
        cy="12"
        r="10.5"
        strokeWidth="3"
        strokeDasharray="4 4"
      />
    </svg>
  )
}

const StyledCircle = styled.circle`
  stroke: ${({ theme, deactivated }) =>
    deactivated ? theme.STEPPER.colour : theme.STEPPER.colourDeactivated};
`

DottedCircle.propTypes = {
  active: bool,
  size: number
}

DottedCircle.defaultProps = {
  active: true,
  size: 24
}

export default DottedCircle
