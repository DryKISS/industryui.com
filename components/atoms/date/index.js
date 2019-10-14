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
