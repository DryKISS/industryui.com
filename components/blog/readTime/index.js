/**
 * Blog - Read Time
 */

// React
import { number } from 'prop-types'

export const BlogReadTime = ({ time }) => {
  return (
    <span>
      Read time: {time} min(s)
    </span>
  )
}

BlogReadTime.propTypes = {
  time: number.isRequired
}
