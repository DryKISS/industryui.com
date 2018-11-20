/**
 * Read Time
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import ReadTime from './'
import Readme from './README.md'

storiesOf('Atoms/ReadTime', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <ReadTime time={2} />
    )
  )
