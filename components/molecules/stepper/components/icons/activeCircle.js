/**
 * Components - Molecules - Stepper - Icon - Active Circle
 */

// React
import React from 'react'
import { number } from 'prop-types'

// Style
import styled from 'styled-components'

const ActiveCircle = ({ size }) => {
  return (
    <svg
      fill="none"
      height={`${size}`}
      viewBox={`0 0 ${size} ${size}`}
      width={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledCircle cx="12" cy="12" r="11" strokeWidth="2" />
    </svg>
  )
}

const StyledCircle = styled.circle`
  stroke: ${({ theme }) => theme.STEPPER.colour};
`

ActiveCircle.propTypes = {
  size: number
}

ActiveCircle.defaultProps = {
  size: 24
}

export default ActiveCircle
