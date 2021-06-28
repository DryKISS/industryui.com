/**
 * Components - Utils - Object Without Properties - Story
 */

// React
import React from 'react'

// UI
import Readme from '../README.md'
import objectWithoutProperties from '../objWithoutProperties'
import Text from '../../../atoms/text/text'
import Space from '../../../atoms/space/space'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/objWithoutProperties'
}

export const Main = () => {
  const originalObject = {
    first: 'firstValue',
    sec: 'secValue',
    third: 'thirdValue',
    fourth: 'fourthValue'
  }

  return (
    <>
      <Space>
        <Text>original: {JSON.stringify(originalObject)}</Text>
      </Space>

      <Text>
        removed secound and third key-values :{' '}
        {JSON.stringify(objectWithoutProperties(originalObject, ['sec', 'third']))}
      </Text>
    </>
  )
}
