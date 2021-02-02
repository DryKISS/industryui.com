/**
 * Components - Text
 */

// UI
import { DISPLAY, SPACER, MEDIA_QUERY } from '../../'
import { TextPropTypes, TextDefaultProps } from './props'

// Style
import styled, { css } from 'styled-components'

export const Text = ({
  align,
  bold,
  children,
  className,
  colour,
  content,
  context,
  stroke,
  size,
  ...props
}) => {
  return (
    <StyledText
      align={align}
      bold={bold}
      className={className}
      colour={colour}
      context={context}
      stroke={stroke}
      size={size}
      {...props}
    >
      {content || children}
    </StyledText>
  )
}

const StyledText = styled.p`
  color: ${({ context, theme: { COLOUR, TEXT_STYLE } }) =>
    context ? COLOUR[context] : TEXT_STYLE.DEFAULT_COLOUR};

  margin: 0;
  padding: 0;
  text-align: ${({ align }) => align};

  ${({ size, theme }) => css`
    font-size: ${theme.TEXT_STYLE.FONT_SIZE[size] ?? '1rem'};
    line-height: ${theme.TEXT_STYLE.LINE_HEIGHT[size] ?? '1rem'};
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
  ${({ stroke }) =>
    stroke === 'true' &&
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

  ${theme => DISPLAY(theme)}
  ${theme => SPACER(theme)}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 600;
    `}
`

Text.protoTypes = TextPropTypes
Text.defaultProps = TextDefaultProps
