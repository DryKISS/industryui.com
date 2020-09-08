/**
 * Form - Error
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const FormError = ({ message, color }) => {
  return <StyledSmall color={color}>{message}</StyledSmall>
}

export const StyledSmall = styled.small`
  color: ${({ theme, color }) => color ?? theme.COLOUR.danger};
  display: block;
  font-size: 80%;
  font-weight: 400;
  margin-top: 0.25rem;
  width: 100%;
`

FormError.propTypes = {
  message: string.isRequired
}
