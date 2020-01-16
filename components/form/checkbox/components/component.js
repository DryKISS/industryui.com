/**
 * Checkbox
 */

// React
import React, { forwardRef } from 'react'
import { bool } from 'prop-types'

// Style
import styled from 'styled-components'

export const CheckboxComponent = forwardRef(({ disabled, stacked, ...props }, ref) => {
  return (
    <StyledCheckbox
      className='Form-control'
      disabled={disabled}
      stacked={stacked}
      type='checkbox'
      ref={ref}
      {...props}
    />
  )
})

const StyledCheckbox = styled.input`
  cursor: pointer;
`

CheckboxComponent.propTypes = {
  disabled: bool,
  stacked: bool
}

CheckboxComponent.defaultProps = {
  stacked: false
}
