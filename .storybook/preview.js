/**
 * Storybook Configuration
 */

// React
import React from 'react'

// Storybook
import { addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { addReadme } from 'storybook-readme'
import { action } from '@storybook/addon-actions'

// Next
import Router from 'next/router'

// UI
import { Container } from 'decorators'
import './decorators/icons'

// CSS
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import '@fullcalendar/list/main.css'
import 'emoji-mart/css/emoji-mart.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'tippy.js/dist/tippy.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const actionWithPromise = () => {
  action('clicked link')()
  return new Promise((_, reject) => reject())
}

const mockedRouter = {
  push: () => {},
  prefetch: () => new Promise((resolve, reject) => {}),
  asPath: '',
  pathName: '',
  query: 'query.com/es'
}

Router.router = mockedRouter
//Router.query = 'query.com/en'

addDecorator(
  withInfo({
    header: true,
    inline: true,
    propTables: false,
    styles: { infoBody: { overflow: 'overlay' } },
    source: false
  })
)

addDecorator(Container)
addDecorator(withA11y)

addParameters({
  options: {
    panelPosition: 'right'
  },
  readme: {
    excludePropTables: []
  }
})

addDecorator(addReadme)
