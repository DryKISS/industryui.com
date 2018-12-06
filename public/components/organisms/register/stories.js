/**
 * Register
 */

// React
import React from 'react'
// import { MemoryRouter } from 'react-router-dom'

// Storybook
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Register } from '../../'
import Readme from './README.md'

// Story
const stories = storiesOf('Organisms/Register', module)

// Decorators
stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(Readme))

// Default
stories.add('Default',
  withInfo(``)(() =>
    // <MemoryRouter>
    <Register />
    // </MemoryRouter>
  )
)
