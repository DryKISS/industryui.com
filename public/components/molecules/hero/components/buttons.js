/**
 * Hero - Buttons
 */

// React
import React, { Component } from 'react'
import { array } from 'prop-types'

// UI
import { Button, Link } from '../../../'

// Style
import styled, { withTheme } from 'styled-components'

export const HeroButtons = withTheme(
  class HeroButtons extends Component {
    static propTypes = {
      buttons: array
    }

    render () {
      const { buttons } = this.props

      return buttons.map(({ content, context, to }, index) => (
        <Link to={to} key={index}>
          <StyledButton
            content={content}
            context={context}
            size='lg'
          />
        </Link>
      ))
    }
  }
)

// Style
const StyledButton = styled(Button)`
  margin-right: 1rem;
`
