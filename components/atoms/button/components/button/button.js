/**
 * Button
 */

// React
import { forwardRef } from 'react'

// UI
import { BACKGROUND, DIMENSION, DISPLAY, shadeLinearRgb, SPACER } from '../../../../'
import { ButtonPropTypes, ButtonDefaultProps } from './props'

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
  color: ${({ context, theme: { COLOUR } }) =>
    context === 'white' ? COLOUR.primary : COLOUR.white};
  border: 2px solid ${({ context, theme: { COLOUR } }) => COLOUR[context]};
  border-radius: .25rem;
  box-sizing: border-box;
  ${props =>
    props.shadow &&
    'box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12);'}
  cursor: pointer;
  display: ${({ block, centre }) => (centre || block ? 'block' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font};   /* stylelint-disable-line */
  font-size: 16px;
  line-height: 100%;
  margin: ${({ centre }) => (centre ? 'auto' : 0)};
  outline: none;
  overflow: visible;
  padding: ${({ theme }) => theme.SPACING(0, 4)};
  text-decoration: none;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: ${({ block }) => (block ? '100%' : 'initial')};
  height: 40px;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      pointer-events: none;
    `}

  ${({ size }) =>
    size === 'xs' &&
    css`
      font-size: 12px;
      padding: ${({ theme }) => theme.SPACING(0, 2)};
      height: 24px;
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: 12px;
      padding: ${({ theme }) => theme.SPACING(0, 3)};
      height: 32px;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      padding: ${({ theme }) => theme.SPACING(0, 5)};
      height: 48px;
    `}

  /* If two buttons are next to each other */
  & + & {
    margin-top: ${({ block }) => (block ? '1rem' : 'initial')};
  }

  &:hover {
    background-color: ${({ context, theme: { COLOUR } }) => shadeLinearRgb(-0.1, COLOUR[context])};
    border-color: ${({ context, theme: { COLOUR } }) => shadeLinearRgb(-0.12, COLOUR[context])};
    color: #fff;
  }

  ${theme => DIMENSION(theme)}
  ${theme => DISPLAY(theme)}
  ${theme => SPACER(theme)}
`

Button.propTypes = ButtonPropTypes

Button.defaultProps = ButtonDefaultProps
