/**
 * Link story
 */

// React
import React from 'react'
// import { MemoryRouter } from 'react-router-dom'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'

// Component
import Link from './'
import Readme from './README.md'

// Story
const stories = storiesOf('Atom/Link', module)

// Decorators
stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(Readme))

// Default
stories.add('Default',
  withInfo(``)(() =>
    // <MemoryRouter>
    <Link to='/'>Home</Link>
    // </MemoryRouter>
  )
)
