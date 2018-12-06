/**
 * Container
 */

// React
import React, { Component } from 'react'
import { bool, node, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Container = withTheme(
  class Container extends Component {
    static propTypes = {
      children: node.isRequired,
      className: string,
      fluid: bool,
      style: objectOf(oneOfType([
        number,
        string
      ]))
    }

    static defaultProps = {
      fluid: false,
      style: {}
    };

    render () {
      const { children, className, fluid, style } = this.props

      return (
        <StyledGrid
          className={className}
          children={children}
          fluid={fluid}
          style={style}
        />
      )
    }
  }
)

const StyledGrid = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.GRID.gutterWidth / 2}px;
  padding-right: ${props => props.theme.GRID.gutterWidth / 2}px;
  position: relative;
  width: ${props => props.fluid ? '100%' : 'initial'};

  /* Medium */
  @media (min-width: ${props => props.theme.GRID.breakpoints.md}px) {
    max-width: ${props => props.theme.GRID.containerWidths.md[0]}px;
  }

  /* Large */
  @media (min-width: ${props => props.theme.GRID.breakpoints.lg}px) {
    max-width: ${props => props.theme.GRID.containerWidths.lg[0]}px;
  }

  /* Extra large */
  @media (min-width: ${props => props.theme.GRID.breakpoints.xl}px) {
    max-width: ${props => props.theme.GRID.containerWidths.xl[0]}px;
  }
`
