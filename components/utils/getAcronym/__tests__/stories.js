/**
 * getAcronym
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { getAcronym, Text } from 'components'

export default {
  args: {
    fullText: 'dont repeat yourself, keep it stupid simple'
  },
  title: 'Utils/GetAcronym',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const GetAcronym = args => {
  return (
    <>
      <Text> Original: {args.fullText} </Text>
      <Text> Acronym: {getAcronym(args.fullText)} </Text>
    </>
  )
}
