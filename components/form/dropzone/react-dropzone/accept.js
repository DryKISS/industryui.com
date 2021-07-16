/**
 * Dropzone - Accept
 * Text to explain what is acceptable to upload
 *
 * @see https://github.com/react-dropzone/react-dropzone/tree/master/examples/accept
 */

// React
import React from 'react'
import { string } from 'prop-types'

const Accept = ({ accept }) => {
  const files = accept.replace(/,/g, ' and ')

  return <em>(Only {files} will be accepted)</em>
}

Accept.propTypes = {
  accept: string.isRequired
}

Accept.defaultProps = {
  accept: 'image/jpeg,image/png'
}

export default Accept
