/**
 * Radio
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'

// Component
import Radio from './'
import Readme from './README.md'

// Story
const stories = storiesOf('Atom/Radio', module)

// Decorators
stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(Readme))

// Default
stories.add('Default',
  withInfo()(() =>
    <Radio />
  )
)
