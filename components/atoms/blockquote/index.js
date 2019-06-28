/**
 * Blockquote
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Blockquote = ({ footer, text }) => {
  return (
    <StyledBlockquote>

      <StyledText>{text}</StyledText>

      {footer &&
        <StyledFooter>{footer}</StyledFooter>
      }

    </StyledBlockquote>
  )
}

const StyledBlockquote = styled.blockquote`
  border-left: 5px solid rgba(240, 0, 0, .5);
  margin: 1rem 0;
  padding: 10px 20px;
`

const StyledText = styled.p`
  color: #000;
  font-size: 2rem;
  margin: 0;
`

const StyledFooter = styled.footer`
  font-size: 1rem;

  &::before {
    content: '\\2014 \\A0';
  }
`

Blockquote.propTypes = {
  footer: string,
  text: string.isRequired
}
