/**
 * Date
 */

// React
import { string } from 'prop-types'

export const Date = ({ date }) => {
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

Date.propTypes = {
  date: string.isRequired
}

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
