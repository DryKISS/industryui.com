/**
 * Caption
 */

// React
import { CONTEXT } from 'components/theme'
import { any, node, number, objectOf, oneOfType, string, oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

export const FigureCaption = ({ children, className, style, context, bgContext }) => (
  <StyledCaption children={children} className={className} style={style} />
)

const StyledCaption = styled.figcaption`
  color: ${({ context, theme: { COLOUR } }) => COLOUR[context]};
  background-color: ${({ bgContext, theme: { COLOUR } }) => COLOUR[bgContext]};
  border-radius: 0 0 0.25rem 0.25rem;
  font-size: 90%;
  margin-top: -2px;
  padding: 0.5rem;
`

FigureCaption.propTypes = {
  bgContext: oneOf([Object.values(CONTEXT)]),
  children: node,
  className: any,
  context: oneOf([Object.values(CONTEXT)]),
  style: objectOf(oneOfType([number, string]))
}

FigureCaption.defaultProps = {
  bgContext: CONTEXT.DARK,
  context: CONTEXT.WHITE
}
