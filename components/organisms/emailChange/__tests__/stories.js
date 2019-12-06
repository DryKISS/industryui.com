/**
 * Email Change
 */

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { EmailChange, useForm } from '../../../'
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

export const main = () => {
  const { change, form } = useForm({ email: '' })

  return <EmailChange change={change} email={form.email} submit={action('Submit')} />
}
