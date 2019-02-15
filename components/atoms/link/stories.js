/**
 * Link
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'

// UI
import { Link } from '../../'
import Readme from './README.md'

// Story
const stories = storiesOf('Atoms/Link', module)

// Decorators
stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(Readme))

// Default
stories.add('Default',
  withInfo(``)(() =>
    <Link to='/'>Home</Link>
  )
)
