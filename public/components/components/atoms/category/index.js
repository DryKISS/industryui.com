/**
 * Category
 */

// React
import React, { Component } from 'react'
import { string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Category = withTheme(
  class Category extends Component {
    static propTypes = {
      category: string.isRequired,
      path: string.isRequired
    }

    render () {
      const { category, path } = this.props
      const categoryFormatted = category.toUpperCase().replace('-', ' ')

      return (
        <StyledCategory>
          <a className='Category-link' href={path}>{categoryFormatted}</a>
        </StyledCategory>
      )
    }
  }
)

// Style
const StyledCategory = styled.div`
  // font-family: adellesans-bold;
  font-size: .75rem;
`

//   .Category-link {
//     color: #00ccbc;
//     text-transform: uppercase;
//   }
//   `

// //   &__category {
// //     font-family: adellesans-bold;
// //     font-size: 12px;
// //     margin-bottom: 5px;
// //     position: relative;
// //     z-index: 2;

// //     a {
// //       color: $brand-primary;
// //     }
// //   }
