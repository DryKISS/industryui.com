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
  color: ${({ colour, context, theme: { COLOUR } }) => (colour ? COLOUR[colour] : COLOUR[context])};
  margin: 0;
  padding: 0;
  text-align: ${({ align }) => align};
  ${({ size }) =>
    size === 'xs' &&
    css`
      font-size: 0.75rem;
      line-height: 1.333;
    `}
  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: 0.875rem;
      line-height: 1.429;
    `}
  ${({ size }) =>
    size === 'md' &&
    css`
      font-size: 1rem;
      line-height: 1.5;
    `}
  ${({ size }) =>
    size === 'lg' &&
    css`
      font-size: 1.25rem;
      line-height: 1.4;
    `}
  ${({ size }) =>
    size === 'xl' &&
    css`
      font-size: 1.5rem;
      line-height: 1.333;
    `}
  ${({ size }) =>
    size === 'xxl' &&
    css`
      font-size: 1.25rem;
      line-height: 1.25;
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
      font-size: 2.5rem;
      line-height: 1.25;
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
`

Text.protoTypes = TextPropTypes
Text.defaultProps = TextDefaultProps
