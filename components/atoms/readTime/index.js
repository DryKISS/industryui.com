/**
 * Read Time
 */

// React
import { number } from 'prop-types'

export const ReadTime = ({ time }) => {
  return (
    <>
      Read time: {time} min(s)
    </>
  )
}

ReadTime.propTypes = {
  time: number.isRequired
}
