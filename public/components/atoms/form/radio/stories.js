/**
 * Radio
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'

// UI
import { Radio } from '../../'
import Readme from './README.md'

// Story
const stories = storiesOf('Atoms/Form/Radio', module)

// Decorators
stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(Readme))

// Default
stories.add('Default',
  withInfo()(() =>
    <Radio />
  )
)
