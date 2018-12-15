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
      offset: {},
      style: {},
      debug: false
    }

    render () {
      const { children, className,  style} = this.props

      let { md, lg, xl, offset } = this.props
      md = md !== undefined ? md : 0
      lg = lg !== undefined ? lg : md
      xl = xl !== undefined ? xl : lg

      offset.md = (offset.md != undefined ? offset.md : 0)
      offset.lg = (offset.lg != undefined ? offset.lg : offset.md)
      offset.xl = (offset.xl != undefined ? offset.xl : offset.lg)

      return (
        <StyledColumn
          className={className}
          children={children}
          size={{ md, lg, xl }}
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
  margin-left: unset;

  /* MD Medium devices (tablets, 768px and up) */
  @media (min-width: ${props => props.theme.GRID.breakpoints.md}px) {
    margin-left: ${props => (100 / 12 * props.offset.md)}%;

    padding-left: ${props => props.theme.GRID.containerWidths.md[1] / 2 }px;
    padding-right:  ${props => props.theme.GRID.containerWidths.md[1] / 2}px;

    flex: 0 0 ${ ({ size }) => 100 / (12 / size.md) }%;
    max-width: ${ ({ size }) => 100 / (12 / size.md) }% ;
  }

  /* LG Large devices (desktops, 992px and up) */
  @media (min-width: ${props => props.theme.GRID.breakpoints.lg}px) {
    margin-left: ${ ({ offset }) => (100 / 12 * offset.lg)}%;

    padding-left: ${props => props.theme.GRID.containerWidths.lg[1] / 2}px;
    padding-right: ${props => props.theme.GRID.containerWidths.lg[1] / 2}px;

    flex: 0 0 ${ ({ size }) => 100 / (12 / size.lg) }%;
    max-width: ${ ({ size }) => 100 / (12 / size.lg) }%
  }

  /* XL Extra large devices (large desktops, 1200px and up) */
  @media (min-width: ${props => props.theme.GRID.breakpoints.xl}px) {
    margin-left: ${ ({ offset }) => (100 / 12 * offset.xl)}%;

    padding-left: ${props => props.theme.GRID.containerWidths.xl[1] / 2}px ;
    padding-right: ${props => props.theme.GRID.containerWidths.xl[1] / 2}px;

    flex: 0 0 ${ ({ size }) => 100 / (12 / size.xl )}%;
    max-width: ${ ({ size }) => 100 / (12 / size.xl)}%
  }
`
