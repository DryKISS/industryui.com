/**
 * Components - Form - Error
 */

// React
import React from 'react'
import { string } from 'prop-types'

// UI
import Space from '../../atoms/space/space'
import Text from '../../atoms/text/text'

const Error = ({ message }) => {
  return (
    <Space marginTop="xs">
      <Text context="danger" size="xs">
        {message}
      </Text>
    </Space>
  )
}

Error.propTypes = {
  message: string.isRequired
}

export default Error
