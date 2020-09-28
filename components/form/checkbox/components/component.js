/**
 * Checkbox
 */

// React
import { forwardRef } from 'react'
import { bool } from 'prop-types'

// Style
import styled from 'styled-components'

export const CheckboxComponent = forwardRef(({ disabled, ...props }, ref) => {
  return (
    <StyledCheckbox
      className='Form-control'
      disabled={disabled}
      type='checkbox'
      ref={ref}
      {...props}
    />
  )
})

const StyledCheckbox = styled.input`
  cursor: pointer;
  margin-right: 0.5rem;
`

CheckboxComponent.propTypes = {
  disabled: bool
}

CheckboxComponent.defaultProps = {
  stacked: false
}
