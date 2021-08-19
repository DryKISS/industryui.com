/**
 * Card header
 */

// React
import React from 'react'
import { oneOf, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import shadeLinearRgb from '../../../utils/colour/shadeLinearRgb'
import THEME_CONTEXT from '../../../constants/context'

const CardHeader = ({ content, context, align }) => {
  return (
    <StyledHeader align={align} context={context}>
      {content}
    </StyledHeader>
  )
}

const StyledHeader = styled.h2`
  background-color: ${({ context, theme }) => shadeLinearRgb(0.8, theme.COLOUR[context])};
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  color: ${({ context, theme }) => theme.COLOUR[context]};
  font-size: 1.25rem;
  margin: 0;
  padding: 0.75rem 0.5rem;
  text-align: ${({ align }) => align};
`

CardHeader.propTypes = {
  content: string.isRequired,
  context: oneOf(Object.values(THEME_CONTEXT)),
  align: oneOf(['center', 'right', 'left'])
}

CardHeader.defaultProps = {
  align: 'center'
}

export default CardHeader
