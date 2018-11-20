/**
 * Callout
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Callout from './'
import Readme from './README.md'

storiesOf('Molecules/CallOut', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Callout />
    )
  )
