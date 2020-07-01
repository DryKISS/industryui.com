/**
 * Stepper
 */

// React
import { array, func, oneOfType, string } from 'prop-types'

// UI
import { StepperItem, StepperSummary } from './'

// Style
import styled from 'styled-components'

export const Stepper = ({ className, items, summary }) => {
  return (
    <StyledStepper>
      <ul>
        {items.map(item => item.active !== false && <StepperItem key={item.id} item={item} />)}
      </ul>
      {summary && <StepperSummary summary={summary} />}
    </StyledStepper>
  )
}

const StyledStepper = styled.div`
  display: inline-block;
  > ul {
    list-style: none;
    margin: 0;
    padding: 0 0 0 20px;
  }
`

Stepper.propTypes = {
  className: string,
  items: oneOfType([array, func]).isRequired,
  summary: oneOfType([array, func])
}
