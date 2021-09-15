/**
 * Components - Molecules - Navbar - Props
 */

// React
import { bool, number, object, objectOf, oneOfType, string } from 'prop-types'

const propTypes = {
  brand: string,
  contained: bool,
  showMenu: bool,
  style: objectOf(oneOfType([number, string])),
  type: string,
  widgets: object
}

export default propTypes
