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

// Component
import Register from './'
import Readme from './README.md'

// Story
const stories = storiesOf('Page/Register', module)

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
