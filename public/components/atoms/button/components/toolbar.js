/**
 * Toolbar
 * Combine sets of button groups into button toolbars for more complex
 * components. Use utility classes as needed to space out groups, buttons, and
 * more.
 *
 * @see https://getbootstrap.com/docs/4.1/components/button-group/#button-toolbar
 */

// React
import React, { Component } from 'react'
import { node } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const ButtonToolbar = withTheme(
  class ButtonToolbar extends Component {
    static propTypes = {
      children: node.isRequired
    }

    render () {
      const { children } = this.props

      return (
        <StyledToolbar
          role='toolbar'
          aria-label='Toolbar with button groups'
        >

          <StyledGroup
            role='group'
            aria-label='First group'
          >

            {children}

          </StyledGroup>

        </StyledToolbar>
      )
    }
  }
)

// Style
const StyledToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const StyledGroup = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: middle;

  & > button:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid ${props => props.theme.COLOUR.light};
  }

  & > button:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`
