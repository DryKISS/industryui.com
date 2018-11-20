/**
 * Navbar story
 *
 * @author Ian Warner <ian.warner@drykiss.com>
 */

// Imports
import React from 'react'
// import { MemoryRouter } from 'react-router-dom'

// Storybook
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'
import Navbar from './'
import Readme from './README.md'

// Story
const stories = storiesOf('Molecules/Navbar', module)

// Decorators
stories.addDecorator(withKnobs)
stories.addDecorator(withReadme(Readme))

const items = [
  { name: 'About us', path: '/about/' },
  { name: 'Journal', path: '/journal/' },
  { name: 'Information', path: '/info/' },
  { name: 'Contact', path: '/contact/' }
]

const activeLinks = {
  '': 'None',
  '/about/': 'About us',
  '/journal/': 'Journal',
  '/info/': 'Information',
  '/contact/': 'Contact'
}

// Default
stories.add('Default',
  withInfo(`
    ~~~js
    <Navbar />
    ~~~
  `)(() =>
    // <MemoryRouter>
    <Navbar
      color='red'
      fixed={null}
      items={items}
      pathname={select('Active Link', activeLinks, null)}
      title={text('Title', 'Umbrella Ltd')}
    />
    // </MemoryRouter>
  )
)
