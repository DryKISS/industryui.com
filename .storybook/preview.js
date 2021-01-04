/**
 * Storybook Configuration
 */

// UI
import { Container, RouterWrap, Wrapper } from 'decorators'
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
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import 'draft-js/dist/Draft.css'
import 'draft-js-mention-plugin/lib/plugin.css'
import 'draft-js-hashtag-plugin/lib/plugin.css'
import 'draft-js-emoji-plugin/lib/plugin.css'
import 'cropperjs/dist/cropper.css'

const actionWithPromise = () => {
  action('clicked link')()
  return new Promise((_, reject) => reject())
}

export const decorators = [RouterWrap, Container, Wrapper]
