/**
 * Password Change
 */

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { PasswordChnage } from '../../'
import Readme from './README.md'

storiesOf('Organisms/Password Chnage', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <PasswordChnage />
    )
  )
