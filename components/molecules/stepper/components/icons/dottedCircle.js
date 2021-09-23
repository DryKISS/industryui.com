import styled from 'styled-components'
/* eslint-disable react/react-in-jsx-scope */
const DottedCircle = ({ size = 24, active = true }) => {
  return (
    <StyledSvg
      width={`${size}`}
      height={`${size}`}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledCircle
        cx="12"
        cy="12"
        r="10.5"
        active={active}
        strokeWidth="3"
        strokeDasharray="4 4"
      />
    </StyledSvg>
  )
}

const StyledSvg = styled.svg``
const StyledCircle = styled.circle`
  stroke: ${({ theme, active }) => (active ? theme.STEPPER.colour : theme.STEPPER.colourInActive)};
`

export default DottedCircle
