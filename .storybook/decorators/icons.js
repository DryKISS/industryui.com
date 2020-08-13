/**
 * FontAwesome Library
 */
import { library } from '@fortawesome/fontawesome-svg-core'

// Free Solid
import {
  // UI & Knobs
  faBell as fasBell,
  faCloud as fasCloud,
  faCopy as fasCopy,
  faCopyright as fasCopyright,
  faEllipsisH as fasEllipsisH,
  faFlag as fasFlag,
  faImages as fasImages,
  faGraduationCap as fasGraduationCap,
  faSearch,
  faShieldAlt as fasShieldAlt,
  faSmile as fasSmile,
  faTrash as fasTrash,
  faUserCircle as fasUserCircle,

  // UI
  faCaretDown,
  faCaretUp,
  faCircle,
  faEnvelope as fasEnvelope
} from '@fortawesome/free-solid-svg-icons'

// Free Regular
import {
  // UI & Knobs
  faCopy as farCopy,
  faCopyright as farCopyright,
  faImages as farImages,
  faSmile as farSmile,
  faUserCircle as farUserCircle
} from '@fortawesome/free-regular-svg-icons'

// Free Brands
import {
  // UI & Knobs
  faGit as fabGit,
  faGithub as fabGithub,
  faLinkedin as fabLinkedin,

  // UI
  faCodepen as fabCodepen
} from '@fortawesome/free-brands-svg-icons'

// Icons
library.add(
  // UI & Knobs
  fasCopy,
  farCopy,
  fasCopyright,
  farCopyright,
  fasImages,
  farImages,
  fasSmile,
  farSmile,
  fasUserCircle,
  farUserCircle,
  fasGraduationCap,
  fasFlag,
  fasEllipsisH,
  fasCloud,
  faSearch,
  fasShieldAlt,
  fasTrash,
  fasBell,

  // UI
  faCaretDown,
  faCaretUp,
  faCircle,
  fasEnvelope,

  // Brands
  fabGit,
  fabCodepen,
  fabGithub,
  fabLinkedin
)

export { library }
