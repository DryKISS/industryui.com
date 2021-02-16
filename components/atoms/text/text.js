/**
 * Components - Text
 */

// React
import React from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import { SPACER, MEDIA_QUERY } from '../../'
import { themeDisplay } from '../../theme/utils/display'

// Props
import { propTypes, defaultProps } from './props'

export const Text = ({ align, children, className, content, context, stroked, size }) => {
  return (
    <StyledText align={align} className={className} context={context} stroked={stroked} size={size}>
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

  ${({ size }) =>
    size === 'xxl' &&
    css`
      ${MEDIA_QUERY.phone`
        font-size: 2rem;
      `}
      ${MEDIA_QUERY.tablet`
        font-size: 3rem;
      `}
      ${MEDIA_QUERY.desktop`
        font-size: 4rem;
      `}
      ${MEDIA_QUERY.giant`
        font-size: 5rem;
      `}
    `}
  ${({ size }) =>
    size === 'xxxl' &&
    css`
      ${MEDIA_QUERY.phone`
        font-size: 5rem;
      `}
      ${MEDIA_QUERY.tablet`
        font-size: 6rem;
      `}
      ${MEDIA_QUERY.desktop`
        font-size: 7rem;
      `}
      ${MEDIA_QUERY.giant`
        font-size: 8rem;
      `}
    `}
  ${({ stroked }) =>
    stroked === 'true' &&
    css`
      -webkit-text-stroke: 1px #000;
      color: transparent;
      ${MEDIA_QUERY.tablet`
        -webkit-text-stroke: 2px #000;
      `}
      ${MEDIA_QUERY.desktop`
        -webkit-text-stroke: 3px #000;
      `}
    `}

  ${theme => themeDisplay(theme)}
  ${theme => SPACER(theme)}
`

Text.propTypes = propTypes
Text.defaultProps = defaultProps
