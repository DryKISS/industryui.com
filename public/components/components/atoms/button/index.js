/**
 * Button
 */

// React
import React, { Component } from 'react'
import { bool, func, node, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { BACKGROUND, COLOUR } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Button = withTheme(
  class Button extends Component {
    static propTypes = {
      centre: bool,
      children: node,
      className: string,
      content: node,
      context: oneOf([
        'dark',
        'light',
        'primary',
        'secondary',
        'accent',
        'alert',
        'error',
        'info',
        'success'
      ]),
      disabled: bool,
      onClick: func,
      outline: bool,
      shadow: bool,
      size: oneOf([
        'sm',
        'lg'
      ]),
      style: objectOf(oneOfType([
        number,
        string
      ])),
      type: oneOf([
        'button',
        'reset',
        'submit'
      ])
    }

    static defaultProps = {
      context: 'accent',
      type: 'button'
    }

    render () {
      const { children, content } = this.props

      return (
        <StyledButton {...this.props} role='button'>
          {children || content}
        </StyledButton>
      )
    }
  }
)

// Style
const StyledButton = styled.button`
  ${props => BACKGROUND(props)}
  ${props => props.outline ? COLOUR(props) : `color: ${props.theme.COLOUR.white}`}
  border: 1px solid ${props => props.theme.COLOUR[props.context]};
  border-radius: ${props => props.size === 'lg' ? '.25rem' : '.25rem'};
  ${props => props.shadow && `box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12);`}
  cursor: pointer;
  display: ${props => props.centre ? 'block' : 'inline-block'};
  font-family: ${props => props.theme.font};
  font-size: ${props => props.size === 'lg' ? '1.25rem' : '1rem'};
  line-height: 1.15;
  margin: ${props => props.centre ? 'auto' : 0};
  outline: none;
  overflow: visible;
  padding: 0.75rem 1.375rem;
  text-decoration: none;
  text-transform: none;
  /* transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; */
  user-select: none;
`

// button,
// [type="button"],
// [type="reset"],
// [type="submit"] {
//   -webkit-appearance: button;
// }

// button::-moz-focus-inner,
// [type="button"]::-moz-focus-inner,
// [type="reset"]::-moz-focus-inner,
// [type="submit"]::-moz-focus-inner {
//   border-style: none;
//   padding: 0;
// }

// button:-moz-focusring,
// [type="button"]:-moz-focusring,
// [type="reset"]:-moz-focusring,
// [type="submit"]:-moz-focusring {
//   outline: 1px dotted ButtonText;
// }
