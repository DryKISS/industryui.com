/**
 * Badge
 */

// React
import React, { Component } from 'react'
import { string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Badge = withTheme(
  class Badge extends Component {
    static propTypes = {
      content: string.isRequired,
      to: string
    }

    render () {
      const { content, to } = this.props

      return (
        <StyledBadge
          itemProp='keywords'
          href={to}
        >
          {content}
        </StyledBadge>
      )
    }
  }
)

// Style
const StyledBadge = styled.a`
  background-color: #e4e3e3;
  color: #3e3e3e;
  border-radius: 0;
  display: inline-block;
  font-size: 90%;
  line-height: 1;
  margin: 0 .5em .5em 0;
  padding: .5em;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;

  &:empty {
    display: none;
  }
`
