/**
 * LAbel
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Label from './'
import Readme from './README.md'

storiesOf('Atoms/Form/Label', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Label />
    )
  )
