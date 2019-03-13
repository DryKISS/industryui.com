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

      <p className='Blockquote-text'>{text}</p>

      {footer &&
        <footer className='Blockquote-footer'>{footer}</footer>
      }

    </StyledBlockquote>
  )
}

const StyledBlockquote = styled.a`
  margin: 0 0 1rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
`

Blockquote.propTypes = {
  footer: string,
  text: string.isRequired
}

// .Blockquote-footer {
//   display: block;
//   font-size: 80%;
//   color: #6c757d;
// }

// .Blockquote-footer:before {
//   content: "\u2014 \u00A0";
// }
