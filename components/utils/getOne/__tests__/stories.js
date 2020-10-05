/**
 * getOne
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { Text, getOne } from 'components'

export default {
  title: 'Utils/GetOne',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
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
      <Text>elements of should have unique id</Text>
      <Text> array: {JSON.stringify(arr)} </Text>
      <Text> element with id=2: {JSON.stringify(getOne(2, arr))} </Text>
    </>
  )
}
