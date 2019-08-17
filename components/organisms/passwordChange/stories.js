/**
 * Password Change
 */

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { PasswordChange } from './'
import Readme from './README.md'

storiesOf('Organisms/Password Change', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <PasswordChange />
  )
