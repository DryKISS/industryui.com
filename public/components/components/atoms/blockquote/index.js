/**
 * Blockquote
 */

// React
import React, { Component } from 'react'
import { string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Blockquote = withTheme(
  class Blockquote extends Component {
    static propTypes = {
      footer: string,
      text: string.isRequired
    }

    render () {
      const { footer, text } = this.props

      return (
        <StyledBlockquote>

          <p className='Blockquote-text'>{text}</p>

          {footer &&
            <footer className='Blockquote-footer'>{footer}</footer>
          }

        </StyledBlockquote>
      )
    }
  }
)

// Style
const StyledBlockquote = styled.a`
  margin: 0 0 1rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
`

// .Blockquote-footer {
//   display: block;
//   font-size: 80%;
//   color: #6c757d;
// }

// .Blockquote-footer:before {
//   content: "\u2014 \u00A0";
// }
