/**
 * Blockquote
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'

// Assets
import Blockquote from './'
import Readme from './README.md'

storiesOf('Atoms/Blockquote', module)

  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))

  .add('Primary',
    withInfo()(() =>
      <Blockquote />
    )
  )
