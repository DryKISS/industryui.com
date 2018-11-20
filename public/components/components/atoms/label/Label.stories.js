/**
 * Label
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Label from '../../'
import Readme from './README.md'

const stories = storiesOf('Atom/Label', module)

// Decorators
stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(Readme))

// Default
stories.add('Default',
  withInfo(``)(() =>
    <Label text='Default text' color={text('Color', 'black')} />
  )
)
