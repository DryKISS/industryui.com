/**
 * Get Url Parameter
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { Text, getUrlParameter } from 'components'

export default {
  title: 'Utils/GetUrlParameters',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
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
