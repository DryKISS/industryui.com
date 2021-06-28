/**
 * getAcronym
 */

// React
import React from 'react'

// UI
import getAcronym from '../getAcronym'
import Text from '../../../atoms/text/text'
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

export const Main = (args) => {
  return (
    <>
      <Text>Original: {args.fullText}</Text>
      <Text>Acronym: {getAcronym(args.fullText)}</Text>
    </>
  )
}
