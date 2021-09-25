/**
 * Components - Molecules - Stepper - Icon - Active Circle
 */

// React
import React from 'react'
import { number } from 'prop-types'

// Style
import styled from 'styled-components'

const CheckedCircle = ({ size }) => {
  return (
    <svg
      fill="none"
      height={`${size}`}
      viewBox={`0 0 ${size} ${size}`}
      width={`${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledCircle cx="12" cy="12" r="12" />
      <StyledPath d="M10.0757 16.2985L6.17573 12.3985C5.94142 12.1642 5.94142 11.7843 6.17573 11.55L7.02424 10.7014C7.25854 10.4671 7.63846 10.4671 7.87277 10.7014L10.5 13.3286L16.1272 7.70144C16.3615 7.46713 16.7414 7.46713 16.9758 7.70144L17.8243 8.54997C18.0586 8.78428 18.0586 9.16417 17.8243 9.3985L10.9243 16.2985C10.6899 16.5328 10.31 16.5328 10.0757 16.2985Z" />
    </svg>
  )
}

const StyledCircle = styled.circle`
  fill: ${({ theme }) => theme.STEPPER.colour};
`

const StyledPath = styled.path`
  fill: ${({ theme }) => theme.STEPPER.colourCheckMark};
`

CheckedCircle.propTypes = {
  size: number
}

CheckedCircle.defaultProps = {
  size: 24
}

export default CheckedCircle
