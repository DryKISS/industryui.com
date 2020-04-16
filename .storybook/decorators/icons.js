/**
 * FontAwesome Library
 */
import { library } from '@fortawesome/fontawesome-svg-core'

// Free Solid
import {
  // UI & Knobs
  faCopy as fasCopy,
  faCopyright as fasCopyright,
  faImages as fasImages,
  faSmile as fasSmile,
  faUserCircle as fasUserCircle,
  faGraduationCap as fasGraduationCap,
  faFlag as fasFlag,
  faEllipsisH as fasEllipsisH,
  faCloud as fasCloud,
  faShieldAlt as fasShieldAlt,
  faTrash as fasTrash,
  faBell as fasBell,

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

// Pro Regular
import {
  // UI & Knobs
  faAlicorn as farAlicorn,
  faTrash as farTrash,
  faBell as farBell,

  // UI
  faArrowLeft,
  faArrowRight,
  faBars,
  faCalendarAlt,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faDogLeashed,
  faExternalLink,
  faHomeHeart,
  faImages,
  faMapMarkerAlt,
  faMars,
  faPaperclip,
  faSearch,
  faShoppingCart,
  faSmile,
  faStethoscope,
  faStopwatch,
  faTimes,
  faTimesCircle,
  faUser,
  faVenus
} from '@fortawesome/pro-regular-svg-icons'

// Pro DuoTone
import {
  // UI & Knobs
  faAlicorn as fadAlicorn,
  faBell as fadBell,
  faTrash as fadTrash,
  faSyncAlt as fadSyncAlt,
  faSpinnerThird as fadSpinnerThird,
  faTire as fadTire,
  faSpinner as fadSpinner,
  faCog as fadCog,
  faSlash as fadSlash,
  faCompass as fadCompass,
  faBullseye as fadBullseye,

  // UI
  faCommentDots,
  faEdit,
  faEnvelope,
  faExclamationTriangle,
  faTachometerAltAverage
} from '@fortawesome/pro-duotone-svg-icons'

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
  fasShieldAlt,

  farAlicorn,
  fadAlicorn,
  fasTrash,
  farTrash,
  fadTrash,
  fasBell,
  farBell,
  fadBell,
  fadSyncAlt,
  fadSpinnerThird,
  fadTire,
  fadSpinner,
  fadCog,
  fadSlash,
  fadCompass,
  fadBullseye,

  // UI
  faArrowLeft,
  faArrowRight,
  faBars,

  faCalendarAlt,
  faCaretDown,
  faCaretUp,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircle,
  faCommentDots,
  faExternalLink,
  faDogLeashed,
  faEdit,
  faEnvelope,
  fasEnvelope,
  faExclamationTriangle,
  faHomeHeart,
  faImages,
  faMapMarkerAlt,
  faMars,
  faPaperclip,
  faSearch,
  faShoppingCart,
  faSmile,
  faStethoscope,
  faStopwatch,
  faTachometerAltAverage,
  faTimes,
  faTimesCircle,
  faUser,
  faVenus,

  // Brands
  fabGit,
  fabCodepen,
  fabGithub,
  fabLinkedin
)

export { library }
