/**
 * Button
 */

// React
import React, { Component } from 'react'
import { bool, func, node, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { BACKGROUND, COLOUR, SHADE_COLOUR } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Button = withTheme(
  class Button extends Component {
    static propTypes = {
      block: bool,
      centre: bool,
      children: node,
      className: string,
      content: node,
      context: oneOf([
        'dark',
        'light',
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger'
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
      disabled: false,
      context: 'primary',
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
  cursor: ${props => props.disabled ? 'initial' : 'pointer'};
  display: ${props => props.centre || props.block ? 'block' : 'inline-block'};
  font-family: ${props => props.theme.font};
  font-size: ${props => props.size === 'lg' ? '1.25rem' : '1rem'};
  line-height: 1;
  margin: ${props => props.centre ? 'auto' : 0};
  outline: none;
  overflow: visible;
  padding: ${props => (props.size === 'lg' && '.5rem 1rem') || (props.size === 'sm' && '.25rem .5rem')};
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: ${props => props.block ? '100%' : 'initial'};

  & + & {
    margin-top: ${props => props.block ? '1rem' : 'initial'};
  }

  &:hover {
    background-color: ${props => SHADE_COLOUR(props.theme.COLOUR[props.context], -10)}
    border-color: ${props => SHADE_COLOUR(props.theme.COLOUR[props.context], -12.5)}
  }
`

// Large
// padding: .5rem 1rem;
// font-size: 1.25rem;
// line-height: 1.5;
// border-radius: .3rem;

// Small
// padding: .25rem .5rem;
// font-size: .875rem;
// line-height: 1.5;
// border-radius: .2rem;

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
