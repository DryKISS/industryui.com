/**
 * Input Tags
 */

// React
import React from 'react'

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
      <React.Fragment>
        (not implemented yet)
        <InputTags />
      </React.Fragment>
    )
  )
