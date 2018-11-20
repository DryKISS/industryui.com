/**
 * Rating
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Rating from './'
import Readme from './README.md'

storiesOf('Molecules/Rating', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Rating />
    )
  )
