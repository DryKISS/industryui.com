/**
 * Date
 */

// React
import React, { Component } from 'react'
import { string } from 'prop-types'

// Style
import { withTheme } from 'styled-components'

export const Date = withTheme(
  class Date extends Component {
    static propTypes = {
      date: string.isRequired
    }

    render () {
      const { date } = this.props

      return (
        <time
          pubdate='pubdate'
          itemProp='datePublished'
          dateTime={date}
        >
          {date}
        </time>
      )
    }
  }
)

// <li>
//   <span className='fa fa-calendar' />
//   <time>date | date : "dd MMMM y"</time>
//  </li>
// <span className='fa fa-calendar' />
