/**
 * Dropzone
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Dropzone from './'
import Readme from './README.md'

storiesOf('Molecules/Dropzone', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Dropzone />
    )
  )
