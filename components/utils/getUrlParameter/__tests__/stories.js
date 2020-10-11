/**
 * Get Url Parameter
 */

// UI
import { getUrlParameter, Text } from 'components'
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

export const GetUrlParameter = () => {
  return (
    <>
      <Text>url: http://drykiss.com/?id=utils-geturlparameters--get-url-parameter</Text>
      <Text>id parameter: {JSON.stringify(getUrlParameter('id'))}</Text>
    </>
  )
}
