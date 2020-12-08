/**
 * Caption
 */

// React
import { any, node, number, objectOf, oneOfType, string, oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

// Components
import { CONTEXT } from 'components/theme'

export const FigureCaption = ({ children, className, style, context, bgContext }) => {
  return (
    <StyledCaption
      bgContext={bgContext}
      children={children}
      className={className}
      context={context}
      style={style}
    />
  )
}

const StyledCaption = styled.figcaption`
  color: ${({ context, theme }) => theme.COLOUR[context]};
  background-color: ${({ bgContext, theme }) => theme.COLOUR[bgContext]};
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
