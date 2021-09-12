/**
 * Storybook Configuration
 */

// UI
import Container from './decorators/container'
import RouterWrap from './decorators/router'
import  Wrapper from './decorators/wrapper'

// Font awesome
import '@fortawesome/fontawesome-svg-core/styles.css'

// Cropper
import 'cropperjs/dist/cropper.min.css'

// Draft JS
import 'draft-js/dist/Draft.css'
import 'draft-js-mention-plugin/lib/plugin.css'
import '@draft-js-plugins/hashtag/lib/plugin.css'
import '@draft-js-plugins/emoji/lib/plugin.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

// Emoji Mart
import 'emoji-mart/css/emoji-mart.css'

// Bog Calendar
import 'react-big-calendar/lib/css/react-big-calendar.css'

// Datepicker
import 'react-datepicker/dist/react-datepicker.min.css'

// Tippy
import 'tippy.js/dist/tippy.css'

// Leaflet
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
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircle,
  faCloud,
  faClipboardCheck,
  faCommentDots,
  faCopy,
  faCopyright,
  faEdit,
  faEllipsisH,
  faEnvelope,
  faExpand,
  faExternalLinkAlt,
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
  faSort,
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
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircle,
  faClipboardCheck,
  faCloud,
  faCommentDots,
  faCopy,
  faCopyright,
  faEdit,
  faEllipsisH,
  faEnvelope,
  faExpand,
  faExternalLinkAlt,
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
  faSort,
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
