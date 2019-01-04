/**
 * Row
 */

// React
import React, { Component } from 'react'
import { node, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Row = withTheme(
  class Row extends Component {
    static propTypes = {
      children: node.isRequired,
      className: string,
      style: objectOf(oneOfType([
        number,
        string
      ]))
    }

    render () {
      const { children, className, style } = this.props

      return (
        <StyledRow
          className={className}
          children={children}
          style={style}
        />
      )
    }
  }
)

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${props => props.theme.GRID.gutterWidth / 2}px;
  margin-right: -${props => props.theme.GRID.gutterWidth / 2}px;
`
