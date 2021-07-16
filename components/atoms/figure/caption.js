/**
 * Caption
 */

// React
import { any, node, number, objectOf, oneOfType, string, oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import THEME_CONTEXT from '../../constants/context'

const FigureCaption = styled.figcaption`
  color: ${({ context, theme }) => theme.COLOUR[context]};
  background-color: ${({ bgContext, theme }) => theme.COLOUR[bgContext]};
  border-radius: 0 0 0.25rem 0.25rem;
  font-size: 90%;
  margin-top: -2px;
  padding: 0.5rem;
`

FigureCaption.propTypes = {
  bgContext: oneOf(Object.values(THEME_CONTEXT)),
  children: node,
  className: any,
  context: oneOf(Object.values(THEME_CONTEXT)),
  style: objectOf(oneOfType([number, string]))
}

FigureCaption.defaultProps = {
  bgContext: THEME_CONTEXT.DARK,
  context: THEME_CONTEXT.WHITE
}

export default FigureCaption
