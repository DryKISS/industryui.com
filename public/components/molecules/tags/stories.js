/**
 * Tags
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Tags } from '../../'
import Readme from './README.md'

storiesOf('Molecules/Tags', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Tags tags={[]} />
    )
  )
