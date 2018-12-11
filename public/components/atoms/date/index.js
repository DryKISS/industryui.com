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
          dateTime={date}
          itemProp='datePublished'
          pubdate='pubdate'
        >
          {date}
        </time>
      )
    }
  }
)

// export function formatDate(dateString) {
//   const utcString = new Date(dateString).toUTCString()
//   const splitDate = utcString.split(' ')
//   const dateArr = splitDate.slice(1, 4)
//   // Swap day and month.
//   // dateArr.splice(1, 1, dateArr.splice(0, 1, dateArr[1])[0])
//   return dateArr.join(' ')

// <li>
//   <span className='fa fa-calendar' />
//   <time>date | date : "dd MMMM y"</time>
//  </li>
//
// <span className='fa fa-calendar' />
