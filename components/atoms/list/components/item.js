/**
 * List Item
 */
import React, { Component } from 'react'
import { bool, node } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Item = withTheme(
  class Item extends Component {
    static propTypes = {
      children: node.isRequired,
      inline: bool
    }

    static defaultProps = {
      inline: false
    }

    render () {
      const { children, inline } = this.props

      return (
        <StyledLi inline={inline}>
          {children}
        </StyledLi>
      )
    }
  },
)

// Style
const StyledLi = styled.li`
  &:not(:last-child) {
    /* margin-right: 3rem; */
  }
`

// @media (min-width: ${configuration.breakpoints.sm}px) {
//   .List-itemInline:not(:last-child) {
//     margin-right: 3rem;
//   }
// }
