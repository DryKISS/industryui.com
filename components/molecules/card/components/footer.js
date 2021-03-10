/**
 * Card footer
 */

// React
import React from 'react'
import { oneOf, node } from 'prop-types'

// UI
import { THEME_CONTEXT } from '../../../theme/constants/context'

// Style
import styled from 'styled-components'

export const CardFooter = ({ children, context }) => {
  return <StyledFooter context={context}>{children}</StyledFooter>
}

const StyledFooter = styled.div`
  align-items: center;
  background-color: ${({ context, theme }) => theme.COLOUR[context]};
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0 0 0.25rem 0.25rem;
  color: ${({ context, theme }) =>
    context === 'light' || context === 'white' ? theme.COLOUR.dark : theme.COLOUR.white};
  display: flex;
  justify-content: center;
  margin-top: auto;
  min-height: 4.5rem;
  padding: 0.75rem;
  text-align: center;
`

CardFooter.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  children: node
}

CardFooter.defaultProps = {
  context: 'light'
}
