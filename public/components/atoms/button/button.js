/**
 * Button
 */

// React
import React, { Component } from 'react'
import { bool, func, node, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { BACKGROUND, COLOUR, SHADE_COLOUR } from '../../'
import { CONTEXT, SIZE } from '../../theme'

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
      context: oneOf(Object.values(CONTEXT)),
      disabled: bool,
      onClick: func,
      outline: bool,
      shadow: bool,
      size: oneOf(Object.values(SIZE)),
      style: objectOf(oneOfType([number, string])),
      type: oneOf(['button', 'reset', 'submit'])
    }

    static defaultProps = {
      context: 'primary',
      disabled: false,
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
  border-radius: .5rem;
  ${props => props.shadow && `box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12), 0px 10px 24px 0px rgba(0, 0, 0, .12);`}
  cursor: ${props => props.disabled ? 'initial' : 'pointer'};
  display: ${props => props.centre || props.block ? 'block' : 'inline-block'};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ size }) => size === 'lg' ? '1.25rem' : '1rem'};
  line-height: 1.5;
  margin: ${({ centre }) => centre ? 'auto' : 0};
  opacity: ${({ disabled }) => disabled && 0.5};
  outline: none;
  overflow: visible;
  padding: ${({ size }) => (size === 'lg' && '.5rem 1rem') || (size === 'sm' && '.25rem .5rem')};
  text-decoration: none;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: ${({ block }) => block ? '100%' : 'initial'};

  /* If two buttons are next to each other */
  & + & {
    margin-top: ${({ block }) => block ? '1rem' : 'initial'};
  }

  &:hover {
    background-color: ${props => SHADE_COLOUR(props.theme.COLOUR[props.context], -10)}
    border-color: ${props => SHADE_COLOUR(props.theme.COLOUR[props.context], -12.5)}
  }
`
