/**
 * Read Time
 */

// React
import { Fragment } from 'react'
import { number } from 'prop-types'

export const ReadTime = ({ time }) => {
  return (
    <Fragment>
      Read time: {time} min(s)
    </Fragment>
  )
}

ReadTime.propTypes = {
  time: number.isRequired
}
