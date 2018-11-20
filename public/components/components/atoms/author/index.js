/**
 * Author
 */

// React
import React, { Component } from 'react'
import { string } from 'prop-types'

// Style
import { withTheme } from 'styled-components'

export const Author = withTheme(
  class Author extends Component {
    static propTypes = {
      author: string.isRequired
    }

    render () {
      const { author } = this.props

      return (
        <a href='javascript:;'>
          {author}
        </a>
      )
    }
  }
)

// <li>
//   <span className='fa fa-user' />
//   <span>
//     <a className='blog-detail__author' href='javascript:;'>Deliveroo</a>
//   </span>
// </li>
