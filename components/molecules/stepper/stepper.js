/**
 * Stepper
 */

// React
import React from 'react'
import { array, func, oneOfType, string } from 'prop-types'

// UI
import StepperItem from './components/stepperItem'
import StepperSummary from './components/summary'

// Style
import styled from 'styled-components'

const Stepper = ({ className, items, summary }) => {
  return (
    <StyledStepper>
      <ul>
        {items.map((item) => item.active !== false && <StepperItem item={item} key={item.id} />)}
      </ul>

      {summary && <StepperSummary summary={summary} />}
    </StyledStepper>
  )
}

const StyledStepper = styled.div`
  display: inline-block;
  > ul {
    list-style: none;
    margin: 0 0.5rem 1rem;
    padding: 0;
  }
`

Stepper.propTypes = {
  className: string,
  items: oneOfType([array, func]).isRequired,
  summary: oneOfType([array, func])
}
export default Stepper
