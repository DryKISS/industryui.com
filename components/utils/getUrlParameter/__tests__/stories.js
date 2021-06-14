/**
 * Get Url Parameter
 */

// React
import React from 'react'

// UI
import getUrlParameter from '../getUrlParameter'
import Text from '../../../atoms/text/text'
import Readme from '../README.md'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/GetUrlParameters'
}

export const Main = () => {
  return (
    <>
      <Text>url: http://drykiss.com/?id=utils-geturlparameters--get-url-parameter</Text>

      <Text>id parameter: {JSON.stringify(getUrlParameter('id'))}</Text>
    </>
  )
}
