/**
 * Read Time
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { ReadTime } from '../../'
import Readme from './README.md'

storiesOf('Atoms/ReadTime', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <ReadTime time={2} />
    )
  )
