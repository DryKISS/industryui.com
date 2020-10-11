/**
 * getAcronym
 */

// UI
import { getAcronym, Text } from 'components'
import Readme from '../README.md'

export default {
  args: {
    fullText: 'dont repeat yourself, keep it stupid simple'
  },
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/GetAcronym'
}

export const GetAcronym = args => {
  return (
    <>
      <Text>Original: {args.fullText}</Text>
      <Text>Acronym: {getAcronym(args.fullText)}</Text>
    </>
  )
}
