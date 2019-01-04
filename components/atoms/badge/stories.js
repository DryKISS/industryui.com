/**
 * Badge
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Badge } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Badge', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Badge content='Ian Warner' />
    )
  )
