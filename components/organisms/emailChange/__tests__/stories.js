/**
 * Email Change
 */

// React
import { createElement } from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { EmailChange, useChange } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Email Change',
  components: EmailChange,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () =>
  createElement(() => {
    const [change, form] = useChange({ email: '' })

    return <EmailChange change={change} email={form.email} submit={action('Submit')} />
  })
