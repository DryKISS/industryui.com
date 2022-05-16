/**
 * Components - Atoms - Grid - Components - Column
 */

// React
import React from 'react'
import { any, number, objectOf, oneOfType, string, shape } from 'prop-types'

// Style
import styled from 'styled-components'

const Column = ({ children, className, columnRef, style, sm, md, lg, xl, offset }) => {
  sm = sm !== undefined ? sm : 0
  md = md !== undefined ? md : sm
  lg = lg !== undefined ? lg : md
  xl = xl !== undefined ? xl : lg

  offset.sm = offset.sm !== undefined ? offset.sm : 0
  offset.md = offset.md !== undefined ? offset.md : offset.sm
  offset.lg = offset.lg !== undefined ? offset.lg : offset.md
  offset.xl = offset.xl !== undefined ? offset.xl : offset.lg

  return (
    <StyledColumn
      children={children}
      className={className}
      off={offset}
      size={{ sm, md, lg, xl }}
      style={style}
      ref={columnRef}
    />
  )
}

const StyledColumn = styled.div`
  box-sizing: border-box;
  height: 100%;
  margin-left: unset;
  min-height: 1px;
  position: relative;
  padding-left: ${({ theme }) => theme.GRID.gutterWidth / 2}px;
  padding-right: ${({ theme }) => theme.GRID.gutterWidth / 2}px;
  width: 100%;

  /* SM Medium devices (tablets, 576px and up) */
  @media (min-width: 0) {
    flex: 0 0 ${({ size }) => (size.sm ? (100 / (12 / size.sm)).toFixed(5) : 100)}%;
    margin-left: ${({ off }) => (off.sm ? ((100 / 12) * off.sm).toFixed(5) : 0)}%;
    max-width: ${({ size }) => (size.sm ? (100 / (12 / size.sm)).toFixed(5) : 100)}%;
  }

  /* MD Medium devices (tablets, 768px and up) */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.md}px) {
    flex: 0 0 ${({ size }) => (100 / (12 / size.md)).toFixed(5)}%;
    margin-left: ${({ off }) => ((100 / 12) * off.md).toFixed(5)}%;
    max-width: ${({ size }) => (100 / (12 / size.md)).toFixed(5)}%;
  }

  /* LG Large devices (desktops, 992px and up) */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.lg}px) {
    flex: 0 0 ${({ size }) => (100 / (12 / size.lg)).toFixed(5)}%;
    margin-left: ${({ off }) => ((100 / 12) * off.lg).toFixed(5)}%;
    max-width: ${({ size }) => (100 / (12 / size.lg)).toFixed(5)}%;
  }

  /* XL Extra large devices (large desktops, 1200px and up) */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.xl}px) {
    flex: 0 0 ${({ size }) => (100 / (12 / size.xl)).toFixed(5)}%;
    margin-left: ${({ off }) => ((100 / 12) * off.xl).toFixed(5)}%;
    max-width: ${({ size }) => (100 / (12 / size.xl)).toFixed(5)}%;
  }
`

Column.propTypes = {
  children: any.isRequired,
  className: string,
  md: number,
  lg: number,
  offset: shape({
    sm: number,
    md: number,
    lg: number,
    xl: number
  }),
  sm: number,
  style: objectOf(oneOfType([number, string])),
  xl: number
}

Column.defaultProps = {
  offset: {},
  style: {},
  debug: false
}

export default Column
