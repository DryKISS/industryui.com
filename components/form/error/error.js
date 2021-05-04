/**
 * Components - Form - Error
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Space from '../../atoms/space/space'
import THEME_SIZE from '../../constants/size'

const FormError = ({ message, colour, ...props }) => {
  return (
    <Space marginTop={THEME_SIZE.XS}>
      <StyledSmall color={colour}>{message}</StyledSmall>
    </Space>
  )
}

const StyledSmall = styled.small`
  color: ${({ theme, colour }) => colour ?? theme.COLOUR.danger};
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  width: 100%;
`

FormError.propTypes = {
  message: string.isRequired,
  colour: string
}

export default FormError
