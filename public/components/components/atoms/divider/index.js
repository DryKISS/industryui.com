/**
 * Divider
 */

// React
import React, { Component } from 'react'
import { oneOf } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Divider = withTheme(
  class Divider extends Component {
    static propTypes = {
      size: oneOf([
        'md',
        'lg'
      ])
    }

    render () {
      const { size } = this.props

      return (
        <StyledDivider size={size} />
      )
    }
  }
)

// Style
const StyledDivider = styled.div`
  border-top: 1px solid rgba(34, 36, 38, .1);
  border-bottom: 1px solid;
  color: rgba(0, 0, 0, .1);
  height: 0;
  line-height: 1;
  margin: ${props => (props.size === 'lg' && '2rem 0') || (props.size === 'md' && '1rem 0')};
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`
