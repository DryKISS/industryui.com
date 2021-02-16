/**
 * objectWithoutProperties
 */

// UI
import Readme from '../README.md'
import { objectWithoutProperties, Space, Text } from '../../../'

export default {
  title: 'Utils/objWithoutProperties',
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
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
