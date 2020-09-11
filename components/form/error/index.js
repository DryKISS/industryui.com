/**
 * Form - Error
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const FormError = ({ message, colour, ...props }) => {
  return <StyledSmall color={colour}>{message}</StyledSmall>
}

export const StyledSmall = styled.small`
  color: ${({ theme, colour }) => colour ?? theme.COLOUR.error};
  display: block;
  font-size: 80%;
  font-weight: 400;
  margin-top: 0.25rem;
  width: 100%;
`

FormError.propTypes = {
  message: string.isRequired,
  colour: string
}
