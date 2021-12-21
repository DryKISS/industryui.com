/**
 * Components - Atoms - Grid - Components - Row
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
  grid-template-rows: max-content;
  gap: ${({ props }) => props.gutter};
  margin: ${(props) => props.margin};

  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.m}px) {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    gap: ${(props) => props.gutterMedium};
    margin: ${(props) => props.marginMedium};
  }

  @media (min-width: ${({ theme }) => theme.GRID.breakpoints.sm}px) {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: ${(props) => props.gutterSmall};
    margin: ${(props) => props.marginSmall};
  }
`

Grid.propTypes = {
  gutter: string,
  gutterMedium: string,
  gutterSmall: string,
  margin: string,
  marginMedium: string,
  marginSmall: string
}

Grid.defaultProps = {
  gutter: '2rem 2rem',
  gutterMedium: '1rem 1rem',
  gutterSmall: '1rem 1rem',
  margin: '0',
  marginMedium: '0',
  marginSmall: '0'
}

export default Grid
