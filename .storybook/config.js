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
import { action } from '@storybook/addon-actions'

// Next
import Router from 'next/router'

// UI
import { Container } from 'decorators'
import './decorators/icons'

const actionWithPromise = () => {
  action('clicked link')()
  return new Promise((_, reject) => reject())
}

const mockedRouter = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: () => {}
}

Router.router = mockedRouter

addDecorator(
  withInfo({
    header: true,
    inline: true,
    styles: { infoBody: { overflow: 'overlay' } },
    source: false
  })
)

addDecorator(Container)
addDecorator(withA11y)

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
configure(require.context('../components', true, /stories\.js$/), module)
