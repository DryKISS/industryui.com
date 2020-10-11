/**
 * Storybook Configuration
 */

// Next
import Router from 'next/router'

// UI
import { Container, Wrapper } from 'decorators'
import './decorators/icons'

// CSS
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/list/main.css'
import '@fullcalendar/timegrid/main.css'
import 'emoji-mart/css/emoji-mart.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'tippy.js/dist/tippy.css'

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

export const decorators = [Container, Wrapper]
