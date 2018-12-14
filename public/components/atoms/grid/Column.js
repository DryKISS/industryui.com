/**
 * Column
 */

// React
import React, { Component } from 'react'
import { any, bool, number, objectOf, oneOfType, string, shape } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Column = withTheme(
  class Column extends Component {
    static propTypes = {
      children: any.isRequired,
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
      xs: number,
      offset: shape({
        md: number,
        lg: number,
        xl: number
      }),
    }

    static defaultProps = {
      xs: null,
      md: null,
      lg: null,
      xl: null,
      offset: {
        md: 0,
        lg: 0,
        xl: 0
      },
      style: {},
      debug: false
    }

    render () {
      const { children, className, lg, md, style, xl, offset } = this.props

      console.log('o2', offset)
      return (
        <StyledColumn
          className={className}
          children={children}
          lg={lg}
          md={md}
          xl={xl}
          offset={offset}
          style={style}
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

    padding-left: calc(${props => props.theme.GRID.containerWidths.md[1] / 2 }px + ${props => (100 / 12 * props.offset.md)}%);
    padding-right:  ${props => props.theme.GRID.containerWidths.md[1] / 2}px;
  
    flex: 0 0 ${props => 100 / (12 / (props.md + props.offset.md ))}%;
    max-width: calc(${props => 100 / (12 / props.md )}% + ${props => (100 / 12 * props.offset.md)}%);
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
