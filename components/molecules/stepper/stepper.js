/**
 * Components - Molecules - Stepper
 */

// React
import React from 'react'
import { array, func, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import StepperItem from './components/item'
import StepperSummary from './components/summary'

const Stepper = ({ className, items, summary, maxWidth = '400px' }) => {
   return (
    <StyledStepper>
      <ul>
        {items.map(
          (item) =>
            item.active !== false && <StepperItem item={item} key={item.id} maxWidth={maxWidth} />
        )}
      </ul>

      {summary && <StepperSummary summary={summary} />}
    </StyledStepper>
  )
}

const StyledStepper = styled.div`
  background-color: ${({ theme }) => theme.STEPPER.colourBackground};
  display: inline-block;
  > ul {
    list-style: none;
    margin: 0 0.5rem 1rem;
    padding: 0;
  }
`

Stepper.propTypes = {
  className: string,
  maxWidth: string,
  items: oneOfType([array, func]).isRequired,
  summary: oneOfType([array, func])
}

export default Stepper
