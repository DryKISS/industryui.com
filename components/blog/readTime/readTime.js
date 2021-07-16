/**
 * Blog - Read Time
 */

// React
import React from 'react'
import { number } from 'prop-types'

// UI
import Text from '../../atoms/text/text'

const BlogReadTime = ({ time }) => {
  return <Text>Read time: {time} min(s)</Text>
}

BlogReadTime.propTypes = {
  time: number.isRequired
}

export default BlogReadTime
