/**
 * Card header
 */

// React
import { oneOf, string } from 'prop-types'

// Style
import styled from 'styled-components'
import { CONTEXT } from '../../../'

export const CardHeader = ({ content, context }) => {
  return (
    <StyledHeader context={context}>{content}</StyledHeader>
  )
}

const StyledHeader = styled.h2`
  background-color: ${({ context, theme }) => theme.COLOUR[context]};
  border-bottom: 1px solid rgba(0, 0, 0, .125);
  border-radius: .25rem .25rem 0 0;
  color: ${({ context, theme }) => (context === 'light' || context === 'white') ? theme.COLOUR.dark : theme.COLOUR.white}}
  font-size: 1.25rem;
  margin: 0;
  padding: .75rem .5rem;
  text-align: center;
`

CardHeader.propTypes = {
  content: string.isRequired,
  context: oneOf(Object.values(CONTEXT))
}
