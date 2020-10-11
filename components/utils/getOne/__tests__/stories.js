/**
 * getOne
 */

// UI
import { getOne, Space, Text } from 'components'
import Readme from '../README.md'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/GetOne'
}

export const GetOne = () => {
  const arr = [
    { id: 0, val: 0 },
    { id: 1, val: 1 },
    { id: 2, val: 2 },
    { id: 3, val: 3 },
    { id: 4, val: 4 }
  ]
  return (
    <>
      <Space>
        <Text>elements of the array should have unique id</Text>
      </Space>

      <Space>
        <Text> array: {JSON.stringify(arr)} </Text>
      </Space>

      <Text> element with id=2: {JSON.stringify(getOne(2, arr))} </Text>
    </>
  )
}
