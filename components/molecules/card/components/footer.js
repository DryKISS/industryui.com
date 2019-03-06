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
      <StyledTitle>{footer}</StyledTitle>
    </StyledFooter>
  )
}

CardFooter.propTypes = {
  context: oneOf(Object.values(CONTEXT)),
  footer: string
}

CardFooter.defaultProps = {
  context: 'primary'
}

const StyledFooter = styled.div`
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, .125);
  display: flex;
  justify-content: center;
  min-height: 4.5rem;
  padding: .75rem;
  text-align: center;
`

const StyledTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
`
