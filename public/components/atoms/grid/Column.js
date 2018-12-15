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
      offset: shape({
        sm: number,
        md: number,
        lg: number,
        xl: number
      }),
      sm: number,
      style: objectOf(oneOfType([
        number,
        string
      ])),
      xl: number
    }

    static defaultProps = {
      offset: {},
      style: {},
      debug: false
    }

    render () {
      const { children, className, style } = this.props

      let { sm, md, lg, xl, offset } = this.props
      sm = sm !== undefined ? sm : 0
      md = md !== undefined ? md : sm
      lg = lg !== undefined ? lg : md
      xl = xl !== undefined ? xl : lg

      offset.sm = (offset.sm !== undefined ? offset.sm : 0)
      offset.md = (offset.md !== undefined ? offset.md : offset.sm)
      offset.lg = (offset.lg !== undefined ? offset.lg : offset.md)
      offset.xl = (offset.xl !== undefined ? offset.xl : offset.lg)

      return (
        <StyledColumn
          className={className}
          children={children}
          size={{ sm, md, lg, xl }}
          off={offset}
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
  padding-left: ${({ theme }) => theme.GRID.gutterWidth / 2}px;
  padding-right: ${({ theme }) => theme.GRID.gutterWidth / 2}px;
  width: 100%;
  margin-left: unset;

  /* SM Medium devices (tablets, 768px and up) */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.sm}px) {
    flex: 0 0 ${({ size }) => 100 / (12 / size.sm)}%;
    margin-left: ${({ off }) => (100 / 12 * off.sm)}%;
    max-width: ${({ size }) => 100 / (12 / size.sm)}% ;
  }

  /* MD Medium devices (tablets, 768px and up) */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.md}px) {
    flex: 0 0 ${({ size }) => 100 / (12 / size.md)}%;
    margin-left: ${({ off }) => (100 / 12 * off.md)}%;
    max-width: ${({ size }) => 100 / (12 / size.md)}% ;
  }

  /* LG Large devices (desktops, 992px and up) */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.lg}px) {
    flex: 0 0 ${({ size }) => 100 / (12 / size.lg)}%;
    margin-left: ${({ off }) => (100 / 12 * off.lg)}%;
    max-width: ${({ size }) => 100 / (12 / size.lg)}%
  }

  /* XL Extra large devices (large desktops, 1200px and up) */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.xl}px) {
    flex: 0 0 ${({ size }) => 100 / (12 / size.xl)}%;
    margin-left: ${({ off }) => (100 / 12 * off.xl)}%;
    max-width: ${({ size }) => 100 / (12 / size.xl)}%
  }
`
