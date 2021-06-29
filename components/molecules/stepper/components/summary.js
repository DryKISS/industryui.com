/**
 * Stepper Summary
 */

// React
import React from 'react'
import { array, string } from 'prop-types'

// Style
import styled from 'styled-components'

const StepperSummary = ({ className, summary }) => {
  const renderItems = (summary) =>
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
    margin: 0;
    padding: 0;
  }
`

const StyledLabel = styled.span`
  font-size: 0.85rem;
`

const StyledValue = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.COLOUR.black};
`

StepperSummary.propTypes = {
  className: string,
  summary: array.isRequired
}
export default StepperSummary
