/**
 * Press
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Press from './'
import Readme from './README.md'

storiesOf('Molecules/Press', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Press />
    )
  )
