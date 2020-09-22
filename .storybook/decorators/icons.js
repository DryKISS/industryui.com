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
  faCircle,
  faCloud,
  faCopy as fasCopy,
  faCopyright,
  faEllipsisH,
  faEnvelope,
  faExpand,
  faFlag,
  faImages as fasImages,
  faGraduationCap,
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
  faCircle,
  farCopy,
  fasCopy,
  faCopyright,
  faEnvelope,
  faExpand,
  farImages,
  fasImages,
  fasSmile,
  farSmile,
  farUserCircle,
  fasUserCircle,
  faGraduationCap,
  faFlag,
  faEllipsisH,
  faCloud,
  faSearch,
  faShieldAlt,
  faTimes,
  faTimesCircle,
  faTrash,
  faUser,

  // Brands
  faGit,
  faCodepen,
  faGithub,
  faLinkedin
)

export { library }
