/**
 * FontAwesome Library
 */
import { library } from '@fortawesome/fontawesome-svg-core'

// Free Solid / FAS
import {
  faBars,
  faBell,
  faCaretDown,
  faCaretUp,
  faCheck,
  faChevronDown,
  faChevronUp,
  faCircle,
  faCloud,
  faCommentDots,
  faCopy as fasCopy,
  faCopyright,
  faEllipsisH,
  faEnvelope,
  faExpand,
  faFlag,
  faGraduationCap,
  faImages as fasImages,
  faPaperclip,
  faSearch,
  faShieldAlt,
  faSmile as fasSmile,
  faTimes,
  faTimesCircle,
  faTrash,
  faUserCircle as fasUserCircle,
  faUser
} from '@fortawesome/free-solid-svg-icons'

// Free Regular / FAR
import {
  faCopy as farCopy,
  faImages as farImages,
  faSmile as farSmile,
  faUserCircle as farUserCircle
} from '@fortawesome/free-regular-svg-icons'

// Free Brands / FAB
import { faGit, faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'

library.add(
  // Icons
  faBars,
  faBell,
  faCaretDown,
  faCaretUp,
  faCheck,
  faChevronDown,
  faChevronUp,
  faCircle,
  faCloud,
  faCommentDots,
  farCopy,
  fasCopy,
  faCopyright,
  faEllipsisH,
  faEnvelope,
  faExpand,
  faFlag,
  faGraduationCap,
  farImages,
  fasImages,
  faPaperclip,
  faSearch,
  faShieldAlt,
  fasSmile,
  farSmile,
  faTimes,
  faTimesCircle,
  faTrash,
  faUser,
  farUserCircle,
  fasUserCircle,

  // Brands
  faCodepen,
  faGit,
  faGithub,
  faLinkedin
)

export { library }
