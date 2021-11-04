/**
 * Components - Atoms - Text
 */

// React
import React from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import MEDIA_QUERY from '../../utils/mediaQuery/query'
import SPACER from '../../utils/spacer/spacer'
import themeDisplay from '../../utils/display/display'

// Props
import { propTypes, defaultProps } from './components/props'

const Text = ({ align, children, className, content, context, size, weight }) => {
  return (
    <StyledText align={align} className={className} context={context} size={size}>
      {content || children}
    </StyledText>
  )
}

const StyledText = styled.p`
  color: ${({ context, theme: { COLOUR, TEXT } }) =>
    context ? COLOUR[context] : TEXT.DEFAULT_COLOUR};
  margin: 0;
  padding: 0;
  text-align: ${({ align }) => align};

  ${({ size, theme }) => css`
    font-size: ${theme.TEXT.FONT_SIZE[size] ?? '1rem'};
    line-height: ${theme.TEXT.LINE_HEIGHT[size] ?? '1rem'};
  `}

  ${(theme) => themeDisplay(theme)}
  ${(theme) => SPACER(theme)}

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight === 'light'
        ? 400
        : weight === 'regular'
        ? 500
        : weight === 'semiBold'
        ? 600
        : weight === 'bold'
        ? 700
        : 500};
    `}
`

Text.propTypes = propTypes
Text.defaultProps = defaultProps

export default Text
