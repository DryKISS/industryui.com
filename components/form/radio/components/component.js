/**
 * Radio
 */

// React
import { forwardRef } from 'react'
import { bool } from 'prop-types'

// Style
import styled from 'styled-components'

export const RadioComponent = forwardRef(({ disabled, ...props }, ref) => {
  return (
    <StyledInput className='Form-control' disabled={disabled} type='radio' ref={ref} {...props} />
  )
})

const StyledInput = styled.input`
  cursor: pointer;
  margin-right: 0.5rem;
`

RadioComponent.propTypes = {
  disabled: bool
}

RadioComponent.defaultProps = {
  stacked: false
}
