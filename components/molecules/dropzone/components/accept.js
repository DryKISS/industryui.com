/**
 * Dropzone - Accept
 * Text to explain what is acceptable to upload
 */

// React
import React from 'react'
import { string } from 'prop-types'

export const Accept = ({ accept }) => {
  const files = accept.replace(/,/g, ' and ')

  return (
    <>
      <em>(Only {files} images will be accepted)</em>
    </>
  )
}

Accept.propTypes = {
  accept: string.isRequired
}

Accept.defaultProps = {
  accept: 'image/jpeg,image/png'
}
