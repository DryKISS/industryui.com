/**
 * Stepper
 */

// React
import { array, func, object, oneOfType, string } from 'prop-types'

// UI
import { StepperItem, StepperTimings } from './'

// Style
import styled from 'styled-components'

export const Stepper = ({ className, items, timings }) => {
  return (
    <StyledStepper>
      <ul>
        {items.map(item => (
          <StepperItem key={item.id} item={item} />
        ))}
      </ul>
      {timings && <StepperTimings timings={timings} />}
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
  timings: object
}
