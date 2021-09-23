import styled from 'styled-components'
/* eslint-disable react/react-in-jsx-scope */
const ActiveCircle = ({ size = 24 }) => {
  return (
    <StyledSvg
      width={`${size}`}
      height={`${size}`}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledCircle cx="12" cy="12" r="11" strokeWidth="2" />
    </StyledSvg>
  )
}

const StyledSvg = styled.svg``
const StyledCircle = styled.circle`
  stroke: ${({ theme }) => theme.STEPPER.colour};
`

export default ActiveCircle
