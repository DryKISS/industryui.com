/**
 * Card footer
 */

// React
import { oneOf, string } from 'prop-types'

// UI
import { CONTEXT } from '../../../theme'

// Style
import styled from 'styled-components'

export const CardFooter = ({ context, footer }) => {
  return (
    <StyledFooter context={context}>
      <StyledTitle>
        <div dangerouslySetInnerHTML={{ __html: footer }} />
      </StyledTitle>
    </StyledFooter>
  )
}

CardFooter.propTypes = {
  context: oneOf(Object.values(CONTEXT)),
  footer: string
}

CardFooter.defaultProps = {
  context: 'light'
}

const StyledFooter = styled.div`
  align-items: center;
  background-color: ${({ context, theme }) => theme.COLOUR[context]}
  border-top: 1px solid rgba(0, 0, 0, .125);
  border-radius: 0 0 .5rem .5rem;
  color: ${({ context, theme }) => (context === 'light' || context === 'white') ? theme.COLOUR.dark : theme.COLOUR.white}}
  display: flex;
  justify-content: center;
  margin-top: auto;
  min-height: 4.5rem;
  padding: .75rem;
  text-align: center;
`

const StyledTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
`
