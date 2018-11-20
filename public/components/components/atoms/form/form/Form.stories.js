/**
 * Form
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Form from './'
import Readme from './README.md'

storiesOf('Atoms/Form/Form', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Form />
    )
  )
