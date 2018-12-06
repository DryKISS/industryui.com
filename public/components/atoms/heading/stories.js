/**
 * Heading
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'

// UI
import { Heading } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Heading', module)

  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Heading
        as='h1'
        content={text('Text', 'Default H1 Heading')}
        pageHeading={boolean('Page Heading', false)}
      />
    )
  )

  .add('Page Heading H2',
    withInfo()(() =>
      <Heading
        as='h2'
        content={text('Text', 'Page Heading Text')}
        pageHeading={boolean('Page Heading', true)}
      />
    )
  )
