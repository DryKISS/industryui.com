/**
 * Card footer
 */

// React
import React, { PureComponent } from 'react'
import { oneOf, string } from 'prop-types'

// UI
import { CONTEXT } from '../../../theme'

// Style
import styled, { withTheme } from 'styled-components'

export const CardFooter = withTheme(
  class CardFooter extends PureComponent {
    static propTypes = {
      context: oneOf(Object.values(CONTEXT)),
      footer: string
    }

    static defaultProps = {
      context: 'primary'
    }

    render () {
      const { context, footer } = this.props

      return (
        <StyledFooter context={context}>
          <StyledTitle>{footer}</StyledTitle>
        </StyledFooter>
      )
    }
  }
)

// Style
const StyledFooter = styled.div`
  /* border-top: 1px solid rgba(0, 0, 0, .125); */
  padding: .75rem;
  text-align: center;
`

const StyledTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
`
