/**
 * Storybook Configuration
 */

// UI
import { Container, RouterWrap, Wrapper } from './decorators'


// CSS
import '@fullcalendar/core/main.min.css'
import '@fullcalendar/daygrid/main.min.css'
import '@fullcalendar/list/main.min.css'
import '@fullcalendar/timegrid/main.min.css'

import '@fortawesome/fontawesome-svg-core/styles.css'

import 'cropperjs/dist/cropper.min.css'

import 'draft-js/dist/Draft.css'
import '@draft-js-plugins/mention/lib/plugin.css'
import '@draft-js-plugins/hashtag/lib/plugin.css'
import '@draft-js-plugins/emoji/lib/plugin.css'

import 'emoji-mart/css/emoji-mart.css'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.min.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import 'tippy.js/dist/tippy.css'

import 'leaflet/dist/leaflet.css'

 // Free Solid / FAS
 import {
  faBars,
  faBell,
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
  faCheck,
  faChevronDown,
  faChevronUp,
  faCircle,
  faCloud,
  faCommentDots,
  faCopy,
  faCopyright,
  faEdit,
  faEllipsisH,
  faEnvelope,
  faExpand,
  faFileCsv,
  faFileInvoice,
  faFilePdf,
  faFlag,
  faGraduationCap,
  faImages,
  faPaperclip,
  faSearch,
  faShieldAlt,
  faSmile,
  faStopwatch,
  faTable,
  faTimes,
  faTimesCircle,
  faTrash,
  faUserCircle,
  faUser
} from '@fortawesome/free-solid-svg-icons'

// Library
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faBars,
  faBell,
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
  faCheck,
  faChevronDown,
  faChevronUp,
  faCircle,
  faCloud,
  faCommentDots,
  faCopy,
  faCopyright,
  faEdit,
  faEllipsisH,
  faEnvelope,
  faExpand,
  faFileCsv,
  faFileInvoice,
  faFilePdf,
  faFlag,
  faGraduationCap,
  faImages,
  faPaperclip,
  faSearch,
  faShieldAlt,
  faSmile,
  faSmile,
  faStopwatch,
  faTable,
  faTimes,
  faTimesCircle,
  faTrash,
  faUser,
  faUserCircle
)

const actionWithPromise = () => {
  action('clicked link')()
  return new Promise((_, reject) => reject())
}

export const decorators = [RouterWrap, Container, Wrapper]
