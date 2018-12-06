/**
 * Card footer
 *
 * @todo Make the H2 a Heading
 */

// React
import React, { PureComponent } from 'react'
import { string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const CardFooter = withTheme(
  class CardFooter extends PureComponent {
    static propTypes = {
      footer: string
    }

    render () {
      const { footer } = this.props

      return (
        <StyledFooter>
          <StyledTitle>{footer}</StyledTitle>
        </StyledFooter>
      )
    }
  }
)

// Style
const StyledFooter = styled.div`
  background-color: rgba(0, 0, 0, .03);
  border-top: 1px solid rgba(0, 0, 0, .125);
  color: #212529;
  padding: .75rem;
  text-align: center;
`

const StyledTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
`
