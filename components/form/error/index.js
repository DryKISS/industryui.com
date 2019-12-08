/**
 * Form - Error
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const FormError = ({ message }) => {
  return <StyledSmall>{message}</StyledSmall>
}

export const StyledSmall = styled.small`
  color: #6c757d;
  display: block;
  font-size: 80%;
  font-weight: 400;
  margin-top: 0.25rem;
`

FormError.propTypes = {
  message: string.isRequired
}
