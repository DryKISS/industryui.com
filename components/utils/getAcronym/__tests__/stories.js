/**
 * getAcronym
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { Text, getAcronym } from 'components'

export default {
  title: 'Utils/GetAcronym',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const GetAcronym = () => {
  return (
    <>
      <Text> original: dont repeat yourself, keep it stupid simple </Text>
      <Text> Acronym: {getAcronym('dont repeat yourself, keep it stupid simple')} </Text>
    </>
  )
}
