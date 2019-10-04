/**
 * Container
 */

// React
import { bool, node, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Container = ({ children, className, fluid, style }) => {
  return (
    <StyledGrid
      className={className}
      children={children}
      fluid={fluid}
      style={style}
    />
  )
}

Container.propTypes = {
  children: node.isRequired,
  className: string,
  fluid: bool,
  style: objectOf(oneOfType([
    number,
    string
  ]))
}

Container.defaultProps = {
  fluid: false,
  style: {}
}

const StyledGrid = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.GRID.gutterWidth / 2}px;
  padding-right: ${props => props.theme.GRID.gutterWidth / 2}px;
  position: relative;
  width: ${({ fluid }) => fluid ? '100%' : 'initial'};

  /* Small */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.sm}px) {
    max-width: ${({ theme }) => theme.GRID.containerWidths.sm}px;
  }

  /* Medium */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.md}px) {
    max-width: ${({ theme }) => theme.GRID.containerWidths.md}px;
  }

  /* Large */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.lg}px) {
    max-width: ${({ theme }) => theme.GRID.containerWidths.lg}px;
  }

  /* Extra large */
  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.xl}px) {
    max-width: ${({ theme }) => theme.GRID.containerWidths.xl}px;
  }
`
