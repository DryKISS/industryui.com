/**
 * Row
 */

// React
import { node, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Row = ({ children, className, style }) => {
  return (
    <StyledRow
      className={className}
      children={children}
      style={style}
    />
  )
}

Row.propTypes = {
  children: node.isRequired,
  className: string,
  style: objectOf(oneOfType([
    number,
    string
  ]))
}

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${props => props.theme.GRID.gutterWidth / 2}px;
  margin-right: -${props => props.theme.GRID.gutterWidth / 2}px;
`
