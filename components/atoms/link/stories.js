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

const stories = storiesOf('Atoms/Link', module)

stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(Readme))

stories.add('Default',
  withInfo(``)(() =>
    <Link to='/'>Home</Link>
  )
)
