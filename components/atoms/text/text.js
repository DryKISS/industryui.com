/**
 * Components - Text
 */

// React
import { node, oneOf, string } from 'prop-types'

// UI
import { CONTEXT, SIZE, MEDIA_QUERY } from '../../'

// Style
import styled, { css } from 'styled-components'

export const Text = ({ align, children, className, content, context, stroke, size }) => {
  return (
    <StyledText
      align={align}
      children={children}
      content={content}
      className={className}
      context={context}
      stroke={stroke}
      size={size}
    />
  )
}

const StyledText = styled.p`
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
      color: ${({ context }) => context};
      font-size: 1.5rem;
      line-height: 1.333;
    `}

  ${({ size }) =>
    size === 'xxl' &&
    css`
      color: ${({ context }) => context};
      font-family: 'JetBrains Mono ExtraBold';
      font-size: 2rem;
      line-height: 1.25;

      ${MEDIA_QUERY.tablet`
        font-size: calc(2rem * 1.5);
      `}
      ${MEDIA_QUERY.desktop`
        font-size: calc(2rem * 2);
      `}
      ${MEDIA_QUERY.giant`
        font-size: calc(2rem * 2.5);
      `}
    `}

  ${({ size }) =>
    size === 'xxxl' &&
    css`
      color: ${({ context }) => context};
      font-family: 'JetBrains Mono ExtraBold';
      font-size: 2.5rem;
      line-height: 1.25;

      ${MEDIA_QUERY.tablet`
        font-size: calc(2.5rem * 1.5);
      `}
      ${MEDIA_QUERY.desktop`
        font-size: calc(2.5rem * 2);
      `}
      ${MEDIA_QUERY.giant`
        font-size: calc(2.5rem * 2.5);
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
`

Text.protoTypes = {
  className: string,
  align: string,
  children: node,
  content: string,
  stroke: string,
  context: oneOf(Object.values(CONTEXT)),
  size: oneOf(Object.values(SIZE))
}

Text.defaultProps = {
  context: 'black',
  size: 'md'
}
