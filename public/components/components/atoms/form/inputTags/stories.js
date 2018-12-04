/**
 * Input Tags
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import InputTags from './'
import Readme from './README.md'

storiesOf('Atoms/Form/InputTags', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <InputTags />
    )
  )
