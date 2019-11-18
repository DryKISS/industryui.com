/**
 * Button
 */

// React
import { forwardRef } from 'react'
import { bool, func, node, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { BACKGROUND, CONTEXT, SHADE_COLOUR, SIZE } from '../../../'

// Style
import styled, { css } from 'styled-components'

export const Button = forwardRef((props, ref) => {
  return (
    <StyledButton {...props} ref={ref} role='button'>
      {props.children || props.content}
    </StyledButton>
  )
})

const StyledButton = styled.button`
  ${props => BACKGROUND(props)}
  color: ${({ context, theme }) =>
    context === 'white' ? theme.COLOUR.primary : theme.COLOUR.white};
  border: 2px solid ${props => props.theme.COLOUR[props.context]};
  border-radius: .25rem;
  ${props =>
    props.shadow &&
    'box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12);'}
  cursor: pointer;
  display: ${props => (props.centre || props.block ? 'block' : 'inline-block')};
  font-family: ${({ theme }) => theme.font};
  font-size: 1rem;
  line-height: .75rem;
  margin: ${({ centre }) => (centre ? 'auto' : 0)};
  outline: none;
  overflow: visible;
  padding: .5rem 1rem;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: ${({ block }) => (block ? '100%' : 'initial')};
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: initial;
      opacity: 0.5;
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: 0.75rem;
      padding: 0.5rem;
    `}

    ${({ size }) =>
      size === 'lg' &&
      css`
        font-size: 1.25rem;
        padding: 1rem;
      `}

  /* If two buttons are next to each other */
  & + & {
    margin-top: ${({ block }) => (block ? '1rem' : 'initial')};
  }

  &:hover {
    background-color: ${props => SHADE_COLOUR(props.theme.COLOUR[props.context], -10)};
    border-color: ${props => SHADE_COLOUR(props.theme.COLOUR[props.context], -12.5)};
    color: #fff;
  }

  .Form-inputGroup > div > & {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

Button.propTypes = {
  block: bool,
  centre: bool,
  children: node,
  className: string,
  content: node,
  context: oneOf(Object.values(CONTEXT)),
  disabled: bool,
  onClick: func,
  outline: bool,
  shadow: bool,
  size: oneOf(Object.values(SIZE)),
  style: objectOf(oneOfType([number, string])),
  type: oneOf(['button', 'reset', 'submit'])
}

Button.defaultProps = {
  context: 'primary',
  disabled: false,
  type: 'button'
}
