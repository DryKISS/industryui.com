/**
 * Section
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Section } from '../../'
import Readme from './README.md'

storiesOf('Molecules/Section', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Section />
    )
  )
