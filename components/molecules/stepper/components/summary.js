/**
 * Stepper Timings
 */

// React
import { array, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const StepperSummary = ({ className, summary }) => {
  const renderItems = summary =>
    summary.map(({ label, value }, i) => (
      <li key={i}>
        <StyledLabel>{label} </StyledLabel>
        <StyledValue>{value}</StyledValue>
      </li>
    ))

  return (
    <StyledStepperSummary>
      <ul>{renderItems(summary)}</ul>
    </StyledStepperSummary>
  )
}

const StyledStepperSummary = styled.div`
  display: inline-block;

  > ul {
    list-style: none;
    margin: 10px 0 20px 20px;
    padding: 0;
  }
`

const StyledLabel = styled.span`
  font-size: 0.85rem;
  color: #999;
`

const StyledValue = styled.span`
  font-size: 0.85rem;
  color: #000;
`

StepperSummary.propTypes = {
  className: string,
  summary: array.isRequired
}
