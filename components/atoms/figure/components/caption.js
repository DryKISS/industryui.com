/**
 * Caption
 */

// React
import { any, node, number, objectOf, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const FigureCaption = ({ children, className, style }) =>
  <StyledCaption
    children={children}
    className={className}
    style={style}
  />

const StyledCaption = styled.figcaption`
  background-color: ${({ theme }) => theme.COLOUR.white};
  border: 1px solid ${({ theme }) => theme.COLOUR.dark};
  border-radius: 0 0 .25rem .25rem;
  font-size: 90%;
  margin-top: -2px;
  padding: .5rem;
`

FigureCaption.propTypes = {
  children: node,
  className: any,
  style: objectOf(oneOfType([number, string]))
}
