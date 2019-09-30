/**
 * Storybook Configuration
 */

// React
import React from 'react'

// Storybook
import { addDecorator, addParameters, configure } from '@storybook/react'

import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { addReadme } from 'storybook-readme'

import { Container } from './Container'
import { ThemeWrapper } from './'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCaretDown,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faDogLeashed,
  faEdit,
  faHomeHeart,
  faImages,
  faMars,
  faStethoscope,
  faTimesCircle,
  faTrash
} from '@fortawesome/pro-regular-svg-icons'

// Icons
library.add(
  faCaretDown,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faDogLeashed,
  faEdit,
  faHomeHeart,
  faImages,
  faMars,
  faStethoscope,
  faTimesCircle,
  faTrash
)

addDecorator(withInfo({
  header: true,
  inline: false,
  styles: { infoBody: { overflow: 'overlay'} },
  source: true
}))

addDecorator(story => <Container story={story} />)

addDecorator(withA11y)
addDecorator(story => <ThemeWrapper story={story} />)

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right'
  },
  readme: {
    codeTheme: 'github',
    excludePropTables: []
  }
})

addDecorator(addReadme)

/**
 * Load stories
 * @see https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
 */
const req = require.context('../components', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
