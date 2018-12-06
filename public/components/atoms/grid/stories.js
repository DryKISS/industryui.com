/**
 * Grid
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Container } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Grid', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Container />
    )
  )
