/**
 * Atoms - Grid - Components - Container
 * Creates a container for the Grid based layout. This container can be fluid or
 * fixed based on the UI breakpoints.
 */

// React
import React from 'react'
import { bool, node, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

const Container = ({ children, className, fluid, style }) => {
  return <StyledGrid children={children} className={className} fluid={fluid} style={style} />
}

const StyledGrid = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: ${({ fluid }) => fluid && '100%'};
  ${({ theme }) => css`
    padding-left: ${theme.GRID.gutterWidth / 2}px;
    padding-right: ${theme.GRID.gutterWidth / 2}px;
  `}

  ${({ fluid }) =>
    !fluid &&
    css`
      @media (min-width: ${({ theme }) => theme.GRID.breakpoints.sm}px) {
        max-width: ${({ theme }) => theme.GRID.containerWidths.sm}px;
      }

      @media (min-width: ${({ theme }) => theme.GRID.breakpoints.md}px) {
        max-width: ${({ theme }) => theme.GRID.containerWidths.md}px;
      }

      @media (min-width: ${({ theme }) => theme.GRID.breakpoints.lg}px) {
        max-width: ${({ theme }) => theme.GRID.containerWidths.lg}px;
      }

      @media (min-width: ${({ theme }) => theme.GRID.breakpoints.xl}px) {
        max-width: ${({ theme }) => theme.GRID.containerWidths.xl}px;
      }
    `}
`

Container.propTypes = {
  children: node.isRequired,
  className: string,
  fluid: bool,
  style: objectOf(oneOfType([number, string]))
}

Container.defaultProps = {
  fluid: false,
  style: {}
}

export default Container
