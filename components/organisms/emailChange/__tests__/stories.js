/**
 * Email Change
 */

// React
import { createElement } from 'react'

import { action } from '@storybook/addon-actions'

// UI
import { EmailChange, useChange } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Email Change',
  components: EmailChange,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () =>
  createElement(() => {
    const [change, form] = useChange({ email: '' })

    return <EmailChange change={change} email={form.email} submit={action('Submit')} />
  })

defaultStory.story = {
  name: 'Default'
}
