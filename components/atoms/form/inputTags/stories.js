/**
 * Input Tags
 */

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { InputTags } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Form/InputTags', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <>
        (not implemented yet)
        <InputTags />
      </>
    )
  )
