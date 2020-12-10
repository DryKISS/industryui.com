/**
 * Form - Error
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'
import { SIZE, Space } from '../../'

export const FormError = ({ message, colour, ...props }) => {
  return (
    <Space marginTop={SIZE.XS}>
      <StyledSmall color={colour}>{message}</StyledSmall>
    </Space>
  )
}

export const StyledSmall = styled.small`
  color: ${({ theme, colour }) => colour ?? theme.COLOUR.error};
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  width: 100%;
`

FormError.propTypes = {
  message: string.isRequired,
  colour: string
}
