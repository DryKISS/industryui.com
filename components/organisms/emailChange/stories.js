/**
 * Email Change
 */

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { EmailChange } from './'
import Readme from './README.md'

storiesOf('Organisms/Email Change', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <EmailChange
      change={() => {}}
      email=''
      submit={() => {}}
    />
  )
