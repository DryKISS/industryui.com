/**
 * Card header
 */

// React
import React, { PureComponent } from 'react'
import { string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const CardHeader = withTheme(
  class CardHeader extends PureComponent {
    static propTypes = {
      header: string
    }

    render () {
      const { header } = this.props

      return (
        <StyledHeader>{header}</StyledHeader>
      )
    }
  }
)

// Style
const StyledHeader = styled.div`
  background-color: #04D4DC;
  border-radius: .5rem .5rem 0 0;
  color: #fff;
  padding: .5rem 2px;
  text-align: center;
`
