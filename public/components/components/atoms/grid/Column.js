/**
 * Column
 */

// React
import React, { Component } from 'react'
import { bool, node, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Column = withTheme(
  class Column extends Component {
    static propTypes = {
      children: node.isRequired,
      className: string,
      debug: bool,
      fluid: string,
      md: number,
      lg: number,
      style: objectOf(oneOfType([
        number,
        string
      ])),
      xl: number,
      xs: number
    }

    static defaultProps = {
      xs: null,
      md: null,
      lg: null,
      xl: null,
      style: {},
      debug: false
    }

    render () {
      const { children, className, lg, md, style, xl } = this.props

      return (
        <StyledColumn
          className={className}
          children={children}
          lg={lg}
          md={md}
          style={style}
          xl={xl}
        />
      )
    }
  }
)

const StyledColumn = styled.div`
  box-sizing: border-box;
  min-height: 1px;
  position: relative;
  padding-left: ${props => props.theme.GRID.gutterWidth / 2}px;
  padding-right: ${props => props.theme.GRID.gutterWidth / 2}px;
  width: 100%;

  /* MD Medium devices (tablets, 768px and up) */
  @media (min-width: ${props => props.theme.GRID.breakpoints.md}px) {
    padding-left: ${props => props.theme.GRID.containerWidths.md[1] / 2}px;
    padding-right: ${props => props.theme.GRID.containerWidths.md[1] / 2}px;

    flex: 0 0 ${props => 100 / (12 / props.md)}%;
    max-width: ${props => 100 / (12 / props.md)}%
  }

  /* LG Large devices (desktops, 992px and up) */
  @media (min-width: ${props => props.theme.GRID.breakpoints.lg}px) {
    padding-left: ${props => props.theme.GRID.containerWidths.lg[1] / 2}px;
    padding-right: ${props => props.theme.GRID.containerWidths.lg[1] / 2}px;

    flex: 0 0 ${props => 100 / (12 / (props.lg || props.md))}%;
    max-width: ${props => 100 / (12 / (props.lg || props.md))}%
  }

  /* XL Extra large devices (large desktops, 1200px and up) */
  @media (min-width: ${props => props.theme.GRID.breakpoints.xl}px) {
    padding-left: ${props => props.theme.GRID.containerWidths.xl[1] / 2}px;
    padding-right: ${props => props.theme.GRID.containerWidths.xl[1] / 2}px;

    flex: 0 0 ${props => 100 / (12 / (props.xl || props.lg || props.md))}%;
    max-width: ${props => 100 / (12 / (props.xl || props.lg || props.md))}%
  }
`
