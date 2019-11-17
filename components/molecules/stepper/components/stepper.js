/**
 * Stepper
 */

// React
import { array, string } from 'prop-types'

// UI
import { StepperItem } from './'

// Style
import styled from 'styled-components'

export const Stepper = ({ className, items }) => {
  return (
    <StyledStepper>
      {items.map(item => (
        <StepperItem key={item.id} item={item} />
      ))}
    </StyledStepper>
  )
}

const StyledStepper = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0 0 0 20px;
`

Stepper.propTypes = {
  className: string,
  items: array.isRequired
}
