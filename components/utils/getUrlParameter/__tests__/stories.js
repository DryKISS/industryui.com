/**
 * Get Url Parameter
 */

import Readme from '../README.md'
import { getUrlParameter, Text } from 'components'

export default {
  title: 'Utils/GetUrlParameters',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const GetUrlParameter = () => {
  return (
    <>
      <Text>url: http://drykiss.com/?id=utils-geturlparameters--get-url-parameter</Text>
      <Text>id parameter: {JSON.stringify(getUrlParameter('id'))}</Text>
    </>
  )
}
