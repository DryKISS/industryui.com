/**
 * Random Color
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { IUIRich } from 'components'

export default {
  title: 'Form/IUIRichEditor',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const IUIRichEditor = () => {
  return <IUIRich />
}
