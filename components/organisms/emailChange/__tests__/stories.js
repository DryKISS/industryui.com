/**
 * Email Change
 */

// React
import { createElement } from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// UI
import { EmailChange, useChange } from '../../../'
import Readme from '../README.md'

storiesOf('Organisms/Email Change', module)
  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () => createElement(() => {
    const [change, form] = useChange({ email: '' })

    return (
      <EmailChange
        change={change}
        email={form.email}
        submit={action('Submit')}
      />
    )
  }))
